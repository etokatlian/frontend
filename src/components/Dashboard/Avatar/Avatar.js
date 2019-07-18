import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { pink } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

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
  const classes = useStyles();

  const generateUserIntiails = () => {
    const {
      user: { firstName, lastName }
    } = state;

    return firstName.substring(0, 1) + lastName.substring(0, 1);
  };

  return (
    <Grid container justify="flex-end" alignItems="center">
      <Avatar className={classes.pink}>{generateUserIntiails()}</Avatar>
    </Grid>
  );
};

export default LetterAvatars;
