import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DropCard from '../dropCard';
import DropsCarousel from './dropsCarousel';

const Drops = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        See our current drops below thats winning hearts.
      </Typography>
      <div className={classes.Carouseldiv}>
        <DropsCarousel item={1} />
      </div>
      <div className={classes.Carouseldiv2}>
        <DropCard />
        <DropCard
          title={'Pool'}
          Description={
            'Take your product to the depths of nature as it sits in elements of wind, water and greenery. Think “outdoor”.'
          }
        />
        <DropCard
          title={'Pool'}
          Description={
            'Take your product to the depths of nature as it sits in elements of wind, water and greenery. Think “outdoor”.'
          }
        />
      </div>
    </div>
  );
};

export default Drops;
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '35px',
    fontWeight: 600,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '49px',
  },
  Carouseldiv: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  Carouseldiv2: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
