import React, { useContext, useEffect } from 'react';
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
  return <h1>Root</h1>;
};

const AppRouter = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const token = window.localStorage.getItem('td_access_token');

    if (token) {
      dispatch({ type: 'user_login_successful' });
    }
  }, [dispatch]);

  return (
    <Router>
      <Route path="/" exact component={Root} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default AppRouter;
