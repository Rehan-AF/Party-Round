import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PostCard from '../postCard';
import profileOne from '../../assets/profile/profile1.jpeg';
import profileTwo from '../../assets/profile/profile2.jpeg';
import profileThree from '../../assets/profile/profile3.jpeg';
import profileFour from '../../assets/profile/profile4.jpeg';
const SectionEight = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title}>
          Raise in good company.
        </Typography>

        <div>
          <Typography className={classes.typo}>
            Join incredible startups and their visionary
            <br />
            founders on Party Round.
          </Typography>
        </div>
      </div>
      <div className={classes.overflow}>
        <div className={classes.postBox}>
          <div className={classes.postOne}>
            <PostCard
              userName="Jordan Singer"
              profile={profileOne}
              title="Founder, Diagram"
              message="That was too easy. Game changing."
            />
          </div>
          <div className={classes.postTwo}>
            <PostCard
              userName="Josh Browder"
              profile={profileTwo}
              title="Founder, DoNotPay"
              message="Just made my first investment via Party Round. The experience was flawless and saves so much headache."
            />
          </div>
          <div className={classes.postThree}>
            <PostCard
              userName="Evan Stewart"
              profile={profileThree}
              title="Founder, Basewell"
              message="Closing a round without using Party Round is the equivalent of sending a fax."
            />
          </div>
          <div className={classes.postFour}>
            <PostCard
              userName="Preston Attebery"
              profile={profileFour}
              title="Founder, Smirk Software"
              message="I can't imagine why a founder would use anything else."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      gap: '30px',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  title: {
    lineHeight: '1',
    fontSize: '3.5rem',
    marginRight: '1rem',
    // fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      textAlign: 'center',
    },
  },
  typo: {
    marginTop: '32px',
    fontSize: '1.2rem',
    lineHeight: '1.1',
    color: 'hsla(0,0%,100%,.8)',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  postBox: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
  },
  postOne: {
    position: 'absolute',
    top: '-256px',
    right: '0',
    zIndex: 3,
    width: '323px',
    [theme.breakpoints.down('md')]: {
      position: 'static',
    },
  },

  postTwo: {
    position: 'absolute',
    top: '-119px',
    right: '188px',
    zIndex: 1,
    width: '324px',
    [theme.breakpoints.down('md')]: {
      position: 'static',
    },
  },
  postThree: {
    position: 'absolute',
    top: '66px',
    right: '10px',
    zIndex: 3,
    width: '324px',
    [theme.breakpoints.down('md')]: {
      position: 'static',
    },
  },
  postFour: {
    position: 'absolute',
    top: '171px',
    left: '-607px',
    width: '324px',
    [theme.breakpoints.down('md')]: {
      position: 'static',
    },
  },
}));
