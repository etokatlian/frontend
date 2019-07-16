import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../globalState';

const Login = () => {
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
      let response = await axios.post('http://localhost:4000/auth/signin', {
        email,
        password
      });

      if (response.data.token) {
        window.localStorage.setItem('td_access_token', response.data.token);
        dispatch({ type: 'user_login_successful' });
      }
    } catch (err) {
      console.log('Error', err);
    }
  };

  if (state.user.isLoggedin) {
    return <Redirect to="/dashboard" />
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextField name="email" label="Email" onChange={handleChange} />
        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        // onClick={() => dispatch({ type: 'user_login_successful' })}
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
