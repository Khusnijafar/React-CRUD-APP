import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 2,
    boxShadow: '5px 5px 5px 5px DarkCyan',

  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h3">
          <a href="/" className="navbar-color"><b>Book</b></a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
