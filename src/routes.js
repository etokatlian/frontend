import React, { useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
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
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

const Root = () => {
  return <Redirect to="/auth/login" />;
};

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const logout = () => {
    window.localStorage.removeItem('td_access_token');
    dispatch({ type: 'logout_user' });
  };

  return (
    <>
      <nav>Header</nav>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </>
  );
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
      {state.user.isLoggedin ? <Header /> : null}
      <Route path="/" exact component={Root} />
      <Route path="/auth" component={Auth} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default AppRouter;
