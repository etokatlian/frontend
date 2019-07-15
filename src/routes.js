import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default AppRouter;
