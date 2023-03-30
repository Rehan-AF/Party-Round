import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const StepCard = ({ img, nmbr, title, detail }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img className={classes.img} src={img} alt="image_failed_to_load" />
      <div className={classes.borderMain}>
        <Typography className={classes.nmbr}>{nmbr}</Typography>
      </div>
      <Typography className={classes.title}>{title}</Typography>
      <Typography>{detail}</Typography>
    </div>
  );
};

export default StepCard;
const useStyles = makeStyles((theme) => ({
  card: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '350px',
    },
  },
  img: {
    width: 400,
    [theme.breakpoints.down('md')]: {
      width: '350px',
    },
  },
  borderMain: {
    backgroundImage:
      'linear-gradient( red, orange, yellow, green, blue, indigo, violet)',
    width: 30,
    height: 30,
    borderRadius: '50%',
    padding: '3px',
    opacity: 0.7,
    marginTop: 20,
  },
  nmbr: {
    background: 'black',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: '800',
    letterSpacing: '0.6px',
    marginTop: 20,
  },
  detail: {
    marginTop: 10,
  },
}));
