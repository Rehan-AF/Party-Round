import { makeStyles, Typography } from '@material-ui/core';
// import { Theaters } from '@material-ui/icons';
import React from 'react';
import heart from '../../assets/heart.png';

import InstaCard from '../instaCard/index';
import Text from '../textfeild';

const InstaPost = () => {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Typography className={classes.title}>
          Make your brands social go <span>brrrr</span>.
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
            <Text>Increase dwell time,</Text>
            <Text>views and interactions,</Text>
            <Text> with campaigns that convert.</Text>
          </Typography>
        </div>
      </div>
      <div className={classes.img2Box}>
        <img className={classes.heartBottom} src={heart} alt="heart" />
      </div>
      <div className={classes.SmBOx}>
        <Typography className={classes.typoSm}>
          <Text>Increase dwell time,</Text>
          <Text>views and interactions,</Text>
          <Text> with campaigns that convert.</Text>
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
    color: '#FAF7F7E5',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      lineHeight: '28px',
      marginBottom: '32px',
    },
    '& span': {
      background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      backgroundSize: '200% auto',
      animation: '$moveGradient 4s linear infinite',
    },
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '10px',
    marginTop: '10px',
    opacity: '90%',
    [theme.breakpoints.down('md')]: {
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
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
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
  typoBox: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '45px',
  },
  typoSm: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: '28px',
      '& br': {
        display: 'none',
      },
    },
  },
}));
