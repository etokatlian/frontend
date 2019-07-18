import React from 'react';
import { Route, Link } from 'react-router-dom';

import Appbar from './Appbar/Appbar';
import Home from './Home/Home';
import Profile from './Profile/Profile';

const Dashboard = props => {
  const [drawerVisibility, setDrawerVisibility] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerVisibility(true);
  };

  const handleDrawerClose = () => {
    setDrawerVisibility(false);
  };

  return (
    <Appbar
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      drawerVisibility={drawerVisibility}
    >
      <Route path={`${props.match.url}`} exact component={Home} />
      <Route path={`${props.match.url}/details`} component={Profile} />
    </Appbar>
  );
};

export default Dashboard;
