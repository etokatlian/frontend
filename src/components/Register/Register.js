import React, { useContext, useEffect, useState } from 'react';
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

  useEffect(() => {
    // console.log('user state: ', state);
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

    let response = await axios.post('http://localhost:4000/auth/register', {
      firstName,
      lastName,
      email,
      password
    });
  };

  return (
    <>
      <h1>Register</h1>
      <Link to="/dashboard">Dashboard</Link>
      <form onSubmit={handleSubmit}>
        <TextField name="firstName" onChange={handleChange} />
        <TextField name="lastName" onChange={handleChange} />
        <TextField name="email" onChange={handleChange} />
        <TextField name="password" onChange={handleChange} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: 'user_login_successful' })}
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default Register;
