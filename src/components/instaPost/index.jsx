import { makeStyles, Typography } from '@material-ui/core';
// import { Theaters } from '@material-ui/icons';
import React from 'react';
import heart from '../../assets/heart.png';

import InstaCard from '../instaCard/index';

const InstaPost = () => {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Typography className={classes.title}>
          Make your brands social go brrrr.{' '}
        </Typography>
        <Typography className={classes.subTitle}>
          Repurposed content is boring, create your edge with dynamic and
          meaniful posts that drive traffic to your stores.
        </Typography>
      </div>
      <div className={classes.img1Box}>
        <img className={classes.heartTop} src={heart} alt="heart" />
      </div>
      <div className={classes.content}>
        <div className={classes.instaPostCard}>
          <InstaCard />
        </div>
        <div>
          <Typography className={classes.typo}>
            Increase dwell time, <br /> views and interactions, <br />
            with campaigns that convert.
          </Typography>
        </div>
      </div>
      <div className={classes.img2Box}>
        <img className={classes.heartBottom} src={heart} alt="heart" />
      </div>
      <div className={classes.SmBOx}>
        <Typography className={classes.typoSm}>
          Increase dwell time, <br /> views and interactions, <br />
          with campaigns that convert.
        </Typography>
      </div>
    </div>
  );
};

export default InstaPost;
const useStyle = makeStyles((theme) => ({
  title: {
    fontSize: '36px',
    fontWeight: 600,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '10px',
    marginTop: '10px',
    opacity: '90%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '21px',
    },
  },
  heartTop: {
    width: '69px',
    transform: 'rotate(-30.05deg)',
  },
  heartBottom: {
    width: '69px',
    transform: 'rotate(14.17deg)',
  },
  img2Box: {
    display: 'flex',
    justifyContent: 'end',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  typo: {
    fontWeight: 600,
    fontSize: '35px',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageInCard: {
    width: '100%',
  },
  SmBOx: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  typoSm: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      fontSize: '2.2rem',
      fontWeight: 600,
    },
  },
}));
