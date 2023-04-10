import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const DropCard = ({ Description, title, inspire, background, img }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={background} className={classes.backgroundImg} alt="" />
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
        </div>
      </div>
      <div className={classes.background}></div>
    </div>
  );
};

export default DropCard;
const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: '20px ',
    backgroundColor: 'black',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      // height: '502px',
      width: '294px',
    },
  },
  backgroundImg: {
    width: '360px',
    height: '430px',
    // borderRadius: '20px',
    [theme.breakpoints.down('md')]: {
      width: '294px',
      height: '351px',
      // height: '501px',
    },
  },
  background: {
    // position: 'absolute',
    // top: '-1px',
    // bottom: '3px',
    // left: '-1px',
    // right: '-1px',
    // content: '""',
    // zIndex: '-1',
    // borderRadius: '20px',
    // backgroundImage: 'linear-gradient(71deg, #121013, #b0afb0, #121013)',
  },
  subContainer: {
    // background:
    //   'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.6) 100%)',
    // padding: '10px 32px 62px 32px',
    // borderRadius: '20px ',
    // height: '478.67px',
    // position: 'absolute',
    // top: '0',
    // left: '0',
    // right: '0',
    // bottom: '0',
    // [theme.breakpoints.down('md')]: {
    //   width: '226px',
    //   height: '425px',
    // },
  },
  title: {
    fontSize: '41px',
    // fontWeight: 600,
  },
  subTitle: {
    fontSize: '14px',
    marginTop: '15px',
  },
}));
