import { makeStyles } from '@material-ui/core';
import React from 'react';
import { GridLarge, GridSmall } from '../../components/gridView/Grid';
import HomePage from '../homePage';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <GridLarge />
      </div>
      <div className={classes.smallGrid}>
        <GridSmall />
      </div>
      <div className={classes.home}>
        <HomePage />
      </div>
    </div>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  home: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    width: '100%',
  },
  grid: {
    marginTop: '10rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '6rem',
      display: 'none',
    },
  },
  smallGrid: {
    marginTop: '10rem',
    display: 'none',
    width: '100vw',
    [theme.breakpoints.down('sm')]: {
      marginTop: '6rem',
      display: 'block',
    },
  },
}));
