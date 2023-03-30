import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const Pricing = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.top}>
        <Typography className={classes.title}>
          Simple pricing that works at any scale.
        </Typography>
        <Typography className={classes.descrip}>
          Forget complex pricing structures, we believe in simple , transparent
          pricing that works for everyone, whether you’re big or small..
        </Typography>
        <Typography className={classes.subTitle}>
          Each plan includes a 7-day trial and you can cancel at any time.
        </Typography>
      </div>
    </div>
  );
};

export default Pricing;

const useStyles = makeStyles((theme) => ({
  pricingBox: {
    textAlign: 'center',
  },
  priceTitle: {
    fontSize: '27px',
    fontWeight: '900',
    marginBottom: '15px',
  },
  price: {
    fontWeight: '900',
    fontSize: '46px',
    marginBottom: '12px',
    '& span': {
      fontSize: '16px',
    },
  },
  priceSub: {
    marginBottom: '67px',
    fontSize: '15px',
    opacity: '90%',
  },
  priceDetails: {
    listStyle: 'none',
    paddingLeft: '10px',
    marginBottom: '57px',
  },
  priceList: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '13px',
  },
  btnBox: {
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '#414CD3',
    color: 'white',
    '&:hover': {
      backgroundColor: '#414CD3',
    },
  },
  top: {
    textAlign: 'center',
  },
  title: {
    fontSize: '35px',
    fontWeight: '600',
    marginBottom: '70px',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      marginBottom: '32px',
    },
  },
  descrip: {
    fontSize: '24px',
    marginBottom: '50px',
    opacity: '90%',
    [theme.breakpoints.down('md')]: {
      marginBottom: '22px',
      fontSize: '17px',
    },
  },
  subTitle: {
    fontWeight: '600',
    fontSize: '24px',
    marginBottom: '44px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '22px',
      fontSize: '12px',
    },
  },
  SliderBox: {
    padding: '0 100px',
    [theme.breakpoints.down('md')]: {
      padding: '0px',
    },
  },
  sliderInfoBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sliderInfo: {
    fontSize: '30px',
    fontWeight: '600',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  sliderTypo: {
    fontSize: '18px',
    opacity: '90%',
    textAlign: 'center',
    marginTop: '22px',
  },
  switchBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    alignItems: 'center',
  },
  priceType: {
    fontSize: '15px',
  },
  PriceingCard: {
    width: '292.5px',
    marginRight: '16px',
    backgroundColor: 'white',
    color: 'black',
    padding: '21px 25px',
    borderRadius: '16px',
  },
}));
