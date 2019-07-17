import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LoginPageWrapper, LoginLogo } from './authStyles';
import Logo from '../../assets/todo-logo.svg';
import Register from './Register/Register';
import NewLogin from './Login/Login';

const Auth = props => {
  if (props.location.pathname === '/auth') {
    return <Redirect to="/auth/login" />;
  }

  return (
    <LoginPageWrapper>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <LoginLogo src={Logo} alt="" />
        <Route path={`${props.match.url}/register`} component={Register} />
        <Route path={`${props.match.url}/login`} component={NewLogin} />
      </div>
    </LoginPageWrapper>
  );
};

export default Auth;
