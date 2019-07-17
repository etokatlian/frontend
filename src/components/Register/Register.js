import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../globalState';
import { LoginPageWrapper } from '../Login/loginStyles';
import { StyledPaper } from '../shared/FormPaper/formPaperStyles';
import { StyledFormRow } from '../shared/FormRow/formRowStyles';
import Logo from '../../assets/todo-logo.svg';
import { LoginLogo } from '../Login/loginStyles';

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
      window.location.pathname = '/login';
    } catch (err) {
      console.log('err', err);
    }
  };

  if (state.user.isLoggedin) {
    return <Redirect to="/login" />;
  }

  return (
    <LoginPageWrapper>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <LoginLogo src={Logo} alt="" />
        <StyledPaper>
          <Typography color="primary" variant="h5">
            Sign up with email
          </Typography>
          <form onSubmit={handleSubmit}>
            <StyledFormRow>
              <TextField
                name="firstName"
                label="First Name"
                onChange={handleChange}
              />
              <TextField
                name="lastName"
                label="Last Name"
                onChange={handleChange}
              />
            </StyledFormRow>

            <TextField name="email" label="Email" onChange={handleChange} />

            <TextField
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
            />

            <div style={{ marginTop: '20px' }}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Sign up
              </Button>
            </div>
          </form>

          <div style={{ marginTop: '30px' }}>
            <Link to="/login">
              <Typography variant="caption">
                Already have an account? Click to log in!
              </Typography>
            </Link>
          </div>
        </StyledPaper>
      </div>
    </LoginPageWrapper>
  );
};

export default Register;
