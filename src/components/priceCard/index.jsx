import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CustomBotton from '../buttons';

const PriceCard = ({ title, price, description, details, year }) => {
  const classes = useStyles();
  let yearlyPrice = price * 12;
  yearlyPrice = yearlyPrice * 0.1;
  return (
    <div className={classes.PriceingCard}>
      <div className={classes.pricingBox}>
        <Typography className={classes.priceTitle}>{title}</Typography>
        <Typography className={classes.price}>
          <span>£ </span>
          {year === true ? price * 12 - yearlyPrice : price}/
          {year === true ? 'yr' : 'mo'}
        </Typography>
        <Typography className={classes.priceSub}>{description}</Typography>
      </div>
      <div>
        <ul className={classes.priceDetails}>
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
      <div className={classes.btnBox}>
        <CustomBotton variant="simple" className={classes.btnBox}>
          Start Now
        </CustomBotton>
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
    width: '292.5px',
    height: '533.52px',
    backgroundColor: 'white',
    color: 'black',
    padding: '21px 25px',
    zIndex: 100,
    // [theme.breakpoints.down('md')]: {
    //   height: '100%',
    // },
    borderTop: '5px solid',
    borderImage: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    animation: '$moveGradient 4s linear infinite',
    borderImageSlice: '2',
    borderRadius: '16px',
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
    [theme.breakpoints.down('md')]: {
      width: '242.5px',
    },
  },
}));
