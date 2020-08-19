const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

router.post(
  '/signup',
  [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('phoneNumber', 'Phone Number name is required').isNumeric(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ error: 'User already exists' });
      }

      user = new User({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.json({
        message: `Congrats ${firstName} - You have signed up Successfully`,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.post(
  '/signin',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let user = await User.findOne({ email });
    try {
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid Credentials' });
      }

      const { _id, firstName, lastName, phoneNumber, email } = user;
      res.json({
        user: { _id, firstName, lastName, phoneNumber, email },
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
