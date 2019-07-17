import React from 'react';
import { Route, Link } from 'react-router-dom';

import Appbar from './Appbar/Appbar';
import Home from './Home/Home';
import Profile from './Profile/Profile';

const Dashboard = props => {
  const [drawerVisibility, setDrawerVisibility] = React.useState(false);

  function handleDrawerOpen() {
    setDrawerVisibility(true);
  }

  function handleDrawerClose() {
    setDrawerVisibility(false);
  }

  return (
    <Appbar
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      drawerVisibility={drawerVisibility}
    >
      <Link to="/dashboard/details">Go to Details page</Link>
      <Link to="/dashboard">Go to home page</Link>
      <Route path={`${props.match.url}`} exact component={Home} />
      <Route path={`${props.match.url}/details`} component={Profile} />
    </Appbar>
  );
};

export default Dashboard;
