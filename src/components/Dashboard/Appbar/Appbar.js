import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import BarChartIcon from '@material-ui/icons/BarChart';

import { appBarStyles } from './appbarStyles';

const Appbar = props => {
  const classes = appBarStyles();
  const theme = useTheme();
  const {
    children,
    handleDrawerOpen,
    handleDrawerClose,
    drawerVisibility
  } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerVisibility
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: drawerVisibility
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerVisibility,
          [classes.drawerClose]: !drawerVisibility
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerVisibility,
            [classes.drawerClose]: !drawerVisibility
          })
        }}
        open={drawerVisibility}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <Link to="/dashboard">
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
            </Link>
            <ListItemText primary={'Todos'} />
          </ListItem>

          <ListItem button>
            <Link to="/dashboard/details">
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
            </Link>
            <ListItemText primary={'Details'} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Appbar;
