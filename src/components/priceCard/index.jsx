import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import CustomBotton from '../buttons';

const PriceCard = ({ title, price, description, details, year, index }) => {
  const classes = useStyles();

  let yearlyPrice = price * 12;
  yearlyPrice = yearlyPrice * 0.1;
  return (
    <div
      className={`${classes.PriceingCard} ${
        index ? `mobileSwiper-slide-active ` : 'mobileSwiper-slide-notActive'
      }`}
    >
      <div className={classes.pricingBox}>
        <Typography
          className={`${classes.priceTitle} ${
            index
              ? `mobileSwiper-slide-active `
              : 'mobileSwiper-slide-notActive'
          }`}
        >
          <span>{title}</span>
        </Typography>
        <Typography
          className={`${classes.price} ${
            index
              ? `mobileSwiper-slide-active `
              : 'mobileSwiper-slide-notActive'
          }`}
        >
          <span>£ </span>
          {year === true ? price * 12 - yearlyPrice : price}/
          {year === true ? 'yr' : 'mo'}
        </Typography>
        <Typography
          className={`${classes.priceSub} ${
            index
              ? `mobileSwiper-slide-active `
              : 'mobileSwiper-slide-notActive'
          }`}
        >
          {description}
        </Typography>
      </div>
      <div>
        <ul
          className={`${classes.priceDetails} ${
            index
              ? `mobileSwiper-slide-active `
              : 'mobileSwiper-slide-notActive'
          }`}
        >
          {details.map((val) => {
            return (
              <li className={classes.priceList}>
                <CheckCircleIcon />
                {val}
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className={classes.btnBox}>
         <CustomBotton
          variant="contained"
          className={`${classes.btnBox} ${
            index
              ? `mobileSwiper-slide-active `
              : 'mobileSwiper-slide-notActive'
          }`}
        >
          Start Now
        </CustomBotton> 
      </div>*/}
      <div className={classes.buttonBox}>
        <Button variant="contained" className={classes.Btn}>
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
const useStyles = makeStyles((theme) => ({
  PriceingCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '533.52px',
    padding: '21px 25px',
    zIndex: 100,
    border: '1px solid #445C7C',
    borderRadius: '16px',
    // [theme.breakpoints.down('md')]: {
    //   height: '100%',
    // },
    '&.mobileSwiper-slide-active': {
      filter: 'blur(0px)',
      backgroundColor: '#E8E8E8',
      transition: 'color 0.3s ease-in-out ,background 0.3s ease-in-out',
    },
    '&.mobileSwiper-slide-notActive': {
      filter: 'blur(5px)',
      backgroundColor: 'black',
      transition:
        'filter 0.2s ease-in-out, color 0.3s ease-in-out ,background 0.3s ease-in-out',
      '&:hover': {
        filter: 'blur(0px)',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '292.5px',
    },
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  pricingBox: {
    textAlign: 'center',
  },
  priceTitle: {
    fontSize: '27px',
    // fontWeight: '900',
    marginBottom: '15px',
    '&.mobileSwiper-slide-active': {
      color: 'black',
      transition: 'color 0.3s ease-in-out ,background 0.3s ease-in-out',
    },
    '&.mobileSwiper-slide-notActive': {
      background: 'linear-gradient(90deg, #55CEFF 0%, #6370E5 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      backgroundSize: '200% auto',
      WebkitTextFillColor: 'transparent',
      transition: 'color 0.3s ease-in-out ,background 0.3s ease-in-out',
    },
  },
  price: {
    // fontWeight: '900',
    fontSize: '46px',
    marginBottom: '12px',
    '& span': {
      fontSize: '16px',
    },
    '&.mobileSwiper-slide-active': {
      color: 'black',
      transition: 'color 0.3s ease-in-out ',
    },
    '&.mobileSwiper-slide-notActive': {
      color: 'white',
      transition: 'color 0.3s ease-in-out ',
    },
  },
  priceSub: {
    marginBottom: '67px',
    fontSize: '15px',
    opacity: '90%',

    '&.mobileSwiper-slide-active': {
      color: 'black',
      transition: 'color 0.3s ease-in-out ',
    },
    '&.mobileSwiper-slide-notActive': {
      color: '#87A0CC',
      transition: 'color 0.3s ease-in-out ',
    },
  },
  priceDetails: {
    listStyle: 'none',
    paddingLeft: '10px',
    marginBottom: '57px',

    '&.mobileSwiper-slide-active': {
      color: 'black',
      '& svg': {
        color: 'black',
      },
      transition: 'color 0.3s ease-in-out ',
    },
    '&.mobileSwiper-slide-notActive': {
      color: '#87A0CC',
      '& svg': {
        color: '#C6C6CC',
      },
      transition: 'color 0.3s ease-in-out ',
    },
  },
  priceList: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '13px',
  },
  // btnBox: {
  //   width: '100%',
  //   [theme.breakpoints.down('md')]: {
  //     width: '242.5px',
  //   },
  //   fontSize: '14px',

  //   '&.mobileSwiper-slide-active': {
  //     color: '#FFFFFF',
  //     backgroundColor: '#292929',
  //     padding: ' 6px 15px',
  //     transition: 'color 0.3s ease-in-out ,background 0.3s ease-in-out',
  //   },
  //   '&.mobileSwiper-slide-notActive': {
  //     color: '#000000',
  //     backgroundColor: '#C6C6CC',
  //     padding: ' 6px 15px',
  //     transition: 'color 0.3s ease-in-out ,background 0.3s ease-in-out',
  //   },
  // },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    border: 0,
    borderRadius: 5,
    color: 'white',
    padding: '1px',
  },
  Btn: {
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    fontSize: '14px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
}));
