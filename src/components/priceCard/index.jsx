import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CustomBotton from '../buttons';

const PriceCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.PriceingCard}>
      <div className={classes.pricingBox}>
        <Typography className={classes.priceTitle}>Seed</Typography>
        <Typography className={classes.price}>
          <span>£ </span>65 /mo
        </Typography>
        <Typography className={classes.priceSub}>
          For brands that want to change the way consumers interact with them.
        </Typography>
      </div>
      <div>
        <ul className={classes.priceDetails}>
          <li className={classes.priceList}>
            <CheckCircleIcon />
            Complex filtering
          </li>
          <li className={classes.priceList}>
            <CheckCircleIcon />
            1,000 daily events
          </li>
          <li className={classes.priceList}>
            <CheckCircleIcon />
            Transaction Preview
          </li>
          <li className={classes.priceList}>
            <CheckCircleIcon />
            Gas refresh rate: 5 sec
          </li>
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
    width: '292.5px',
    marginRight: '16px !important',
    backgroundColor: 'white',
    color: 'black',
    padding: '21px 25px',
    borderRadius: '16px',
    zIndex: 100,
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
  },
}));
