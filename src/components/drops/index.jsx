import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import DropSlicer from './dropsSlicer';

const Drops = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        See our current drops below thats <span>winning</span> hearts.
      </Typography>
      <div className={classes.Carouseldiv2}>
        <DropSlicer />
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
    '& span': {
      background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      backgroundSize: '200% auto',
      animation: '$moveGradient 4s linear infinite',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      lineHeight: '28px',
    },
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
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
  // Carouseldiv2: {
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
}));
