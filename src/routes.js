import React, { useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import { GlobalContext } from './components/globalState';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={props =>
        state.user.isLoggedin === true ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  );
};

const Root = () => {
  return <Redirect to="/login" />;
};

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const logout = () => {
    window.localStorage.removeItem('td_access_token');
    dispatch({ type: 'logout_user' })
  }

  return (
    <>
      <h1>Header</h1>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => logout()} >Logout</Button>
    </>
  )
};

const AppRouter = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const token = window.localStorage.getItem('td_access_token');

    if (token) {
      dispatch({ type: 'user_login_successful' });
    }
  }, []);

  return (
    <Router>
      {state.user.isLoggedin ? <Header /> : null}
      <Route path="/" exact component={Root} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default AppRouter;
