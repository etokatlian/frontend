import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { pink } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { GlobalContext } from '../../globalState';

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  pink: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500]
  }
});

const LetterAvatars = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    window.localStorage.removeItem('td_access_token');
    dispatch({ type: 'logout_user' });
  };

  const generateUserIntiails = () => {
    const {
      user: { firstName, lastName }
    } = state;

    return firstName.substring(0, 1) + lastName.substring(0, 1);
  };

  return (
    <Grid container justify="flex-end" alignItems="center">
      <Avatar className={classes.pink} onClick={handleClick}>
        {generateUserIntiails()}
      </Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logoutUser}>Logout</MenuItem>
      </Menu>
    </Grid>
  );
};

export default LetterAvatars;
