import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import img1 from '../../assets/coke.jpg';

const DropCard = ({ Description, title, inspire, background, img }) => {
  const classes = useStyles();
  return (
    <div
      style={{ background: `url("${background || img1}")` }}
      className={classes.container}
    >
      <div className={classes.subContainer}>
        <div>
          <Typography className={classes.title}>
            {title || 'Ball-em'}
          </Typography>
          <Typography className={classes.subTitle}>
            {Description ||
              'Perfectly chosen, different sized blocks give your audience the context of shape and size of your product.'}
          </Typography>
        </div>
        <div>
          <Typography>{inspire}</Typography>
          {img ? <img src={img} alt="" /> : null}
        </div>
      </div>
    </div>
  );
};

export default DropCard;
const useStyles = makeStyles((theme) => ({
  container: {
    background: 'fit',
    width: '346.67px',
    height: '554.67px',
    borderRadius: '20px ',
    marginRight: '16px',
    [theme.breakpoints.down('md')]: {
      width: '295px',
      height: '502px',
    },
  },
  subContainer: {
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(9,9,121,0) 50%, rgba(0,0,0,0.9) 100%)',
    padding: '36px 32px',
    height: '100%',
  },
  title: {
    fontSize: '41px',
    fontWeight: 600,
  },
  subTitle: {
    fontSize: '14px',
    marginTop: '15px',
  },
}));
