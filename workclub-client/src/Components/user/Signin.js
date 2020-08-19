import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const Signin = ({ user }) => {
  const [value, setValue] = useState({
    email: 'sudarshansprakash@gmail.com',
    password: 'password',
  });
  const [valid, setValid] = useState(false);

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
      localStorage.setItem('access', 'granted');
    } else {
      localStorage.setItem('access', 'denied');
    }
    console.log(result);
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
      if (localStorage.getItem('access') === 'granted') {
        return <Redirect to='/App' />;
      }
    } else {
      if (localStorage.getItem('access') === 'denied')
        return (
          <div>
            Enter Valid Credentials. Please reload the page if necessary - i
            used local storage and didn't track loading through state
          </div>
        );
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
  console.log(state.user);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Signin);
