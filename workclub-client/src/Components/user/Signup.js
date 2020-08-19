import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

const Signup = () => {
  const [value, setValue] = useState({
    phoneNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [valid, setValid] = useState(false);

  const signup = async () => {
    const { phoneNumber, firstName, lastName, password, email } = value;
    const res = await fetch('http://localhost:5000/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber,
        firstName,
        lastName,
        password,
        email,
      }),
    });
    const result = await res.json();
    console.log(result);
    if (result.message) {
      setValid(true);
    }
  };

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup();
  };

  const redirectUser = () => {
    if (valid) {
      return <Redirect to='/' />;
    } else {
      return <div>Enter valid Credentials</div>;
    }
  };

  return (
    <div className='container'>
      <form>
        <div className='form-group row'>
          <label className='col-sm-2 col-form-label'>First Name</label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='firstName'
              onChange={handleChange}
              value={value.firstName}
            ></input>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-2 col-form-label'>Last Name</label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='lastName'
              onChange={handleChange}
              value={value.lastName}
            ></input>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-2 col-form-label'>Phone Number</label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='phoneNumber'
              onChange={handleChange}
              value={value.phoneNumber}
            ></input>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
            Email
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              id='staticEmail'
              name='email'
              onChange={handleChange}
              value={value.email}
            ></input>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputPassword' className='col-sm-2 col-form-label'>
            Password
          </label>
          <div className='col-sm-10'>
            <input
              type='password'
              className='form-control'
              id='inputPassword'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              value={value.password}
            ></input>
          </div>
          <button className='btn  btn-primary' onClick={handleSubmit}>
            Sign up
          </button>
        </div>
        {redirectUser()}
        <Link to='/'>Already have an account? Sign in</Link>
      </form>
    </div>
  );
};

export default Signup;
