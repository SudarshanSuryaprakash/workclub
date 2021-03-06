import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { toggleActive } from '../../actions';

const Signin = ({ toggleActive, active }) => {
  const [value, setValue] = useState({
    email: 'sudarshansprakash@gmail.com',
    password: 'password',
  });
  const [valid, setValid] = useState(null);

  const signin = async () => {
    const { email, password } = value;
    const res = await fetch('http://localhost:5000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        email,
      }),
    });
    const result = await res.json();
    if (result.user) {
      setValid(true);
      toggleActive(true);
    } else {
      setValid(false);
      toggleActive(false);
    }
  };

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signin();
    console.log(valid);
  };

  const redirectUser = () => {
    if (valid) {
      if (active) {
        return <Redirect to='/App' />;
      }
    } else {
      if (!active && valid === false)
        return <div>Please enter Valid Credentials.</div>;
    }
  };

  return (
    <div className='container'>
      <form>
        <div className='form-group row'>
          <label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
            Email
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control-plaintext'
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
          <button className='btn btn-primary' onClick={handleSubmit}>
            SignIn
          </button>
        </div>
      </form>
      {redirectUser()}
      <Link to='/signup'>Need an account? Sign up</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    active: state.active,
  };
};

export default connect(mapStateToProps, { toggleActive })(Signin);
