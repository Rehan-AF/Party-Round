import React from 'react';
import papaJones from '../../assets/papaJones.jpeg';
import insta from '../../assets/insta.png';
import { makeStyles } from '@material-ui/core';
const InstaCard = ({ picture }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={insta} alt="" className={classes.card} />
      <img src={picture || papaJones} alt="" className={classes.post} />
    </div>
  );
};

export default InstaCard;
const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  card: {
    width: '486px',
    [theme.breakpoints.down('md')]: {
      width: '311px',
      height: '397px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
    },
  },
  post: {
    position: 'absolute ',
    top: '104px',
    left: '0px',
    width: '462px',
    height: '372px',
    [theme.breakpoints.down('md')]: {
      width: '294px',
      height: '259px',
      top: '72px',
    },
    [theme.breakpoints.down('sm')]: {
      left: 0,
    },
  },
}));
