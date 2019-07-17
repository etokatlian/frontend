import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../../globalState';
import { StyledPaper } from '../../shared/FormPaper/formPaperStyles';

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
    const { email, password } = loginInfo;

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
    return <Redirect to="/dashboard" />;
  }

  return (
    <StyledPaper>
      <Typography color="primary" variant="h5">
        Let's log in!
      </Typography>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px 0' }}>
          <TextField name="email" label="Email" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <TextField
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />
        </div>

        <Button type="submit" variant="contained" color="secondary" fullWidth>
          Log in
        </Button>
      </form>
      <div style={{ marginTop: '80px' }}>
        <Link to="/auth/register">
          <Typography variant="caption">
            Not a user yet? Sign up now!
          </Typography>
        </Link>
      </div>
    </StyledPaper>
  );
};

export default Login;
