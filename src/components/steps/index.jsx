import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import StepCard from '../stepCard';
import img1 from '../../assets/ss1.png';
import img2 from '../../assets/ss2.png';
import img3 from '../../assets/ss3.png';
const StepsSection = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>
        If you're a business that sells a , we're a perfect fit.
        <br /> Redefine your value proposition.
      </Typography>
      <div className={classes.StepCardBox}>
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
  },
  StepCardBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
}));
