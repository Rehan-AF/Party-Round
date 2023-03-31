import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import img1 from '../../assets/ss1.png';
import img2 from '../../assets/ss2.png';
import img3 from '../../assets/ss3.png';
import MobileCarousel from '../Carousel';
import StepCard from '../stepCard';
const StepsSection = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>
        If you're a business that sells a , we're a perfect fit.
        <br /> Redefine your value proposition.
      </Typography>
      <div className={classes.StepCardBox}>
        <MobileCarousel item={1} />
      </div>
      <div className={classes.StepCardBox2}>
        <StepCard
          img={img1}
          nmbr={1}
          title={'Receipt scanned'}
          detail={
            'A.I powered verification system used to ensure a valid game entry.'
          }
        />
        <StepCard
          img={img2}
          nmbr={2}
          title={'Immersive gameplay '}
          detail={
            'Your brands engagement taken to new heights from our library of games.'
          }
        />
        <StepCard
          img={img3}
          nmbr={3}
          title={'Purposefully deployed'}
          detail={
            'Dependent on campaign, players can enjoy an instant win or enter in to a prize pool competition.'
          }
        />
      </div>
    </div>
  );
};

export default StepsSection;
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 36,
    color: '#FFFFFFE5',
    fontWeight: 600,
    letterSpacing: '0.6px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      textAlign: 'start',
      '& br': {
        display: 'none  ',
      },
    },
  },
  StepCardBox: {
    display: 'none',
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  StepCardBox2: {
    display: 'flex',
    marginTop: '40px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
