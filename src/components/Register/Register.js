import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../globalState';

const Register = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [loginInfo, setLoginInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = event => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = loginInfo;

    try {
      let response = await axios.post('http://localhost:4000/auth/register', {
        firstName,
        lastName,
        email,
        password
      });

      // there needs to be a better solution than this
      window.location.pathname = '/login'

    } catch (err) {
      console.log('err', err)
    }

  };

  if (state.user.isLoggedin) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <h1>Register</h1>
      <Link to="/login">Go to Login</Link>
      <form onSubmit={handleSubmit}>
        <TextField name="firstName" label="First Name" onChange={handleChange} />
        <TextField name="lastName" label="Last Name" onChange={handleChange} />
        <TextField name="email" label="Email" onChange={handleChange} />
        <TextField name="password" label="Password" type="password" onChange={handleChange} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default Register;
