import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useRef, useEffect, useState } from 'react';
// import CustomBotton from '../buttons';
import { useScrollDirection } from '../../hooks';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import clsx from 'clsx';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// import Typed from 'typed.js';
import PhoneComponent from '../phone component';
import calculator from '../../assets/logos/calculator.png';
const SectionRaise = () => {
  const classes = useStyles();
  const boxRef = useRef(null);
  const myRef = useRef();

  const scrollDirection = useScrollDirection(myRef);
  const [entryIsVisible, setEntryIsVesible] = useState({
    isScrolledUp: false,
    isScrolledDown: false,
  });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (scrollDirection === 'up') {
        setEntryIsVesible((prev) => ({
          ...prev,
          isScrolledDown: false,
          isScrolledUp: entry.isIntersecting,
        }));
      } else if (scrollDirection === 'down') {
        setEntryIsVesible((prev) => ({
          ...prev,
          isScrolledDown: entry.isIntersecting,
          isScrolledUp: false,
        }));
      } else {
        setEntryIsVesible((prev) => ({
          ...prev,
          isScrolledDown: false,
          isScrolledUp: false,
        }));
      }
    });
    observer.observe(myRef.current);
  }, [scrollDirection]);
  // useEffect(() => {
  //   const typed = new Typed('.typing', {
  //     strings: ['engagement', 'revenues'],
  //     typeSpeed: 80,
  //     backSpeed: 60,
  //     backDelay: 1000,
  //     loop: false,
  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <div className={classes.container} ref={boxRef}>
      <div className={classes.subContainer}>
        <Typography className={classes.title}>
          Take the <span>leap</span>, take the <span>win</span>. <br />
        </Typography>
        <Typography className={classes.subTitle}>
          Level-up your bottom line, host a game.
        </Typography>
        <Typography className={classes.hashTags}>#GoodGame #GG</Typography>
        <div className={classes.btnBox}>
          <div className={classes.buttonBox}>
            <Button variant="contained" className={classes.Btn}>
              <img src={calculator} alt="" width={18} />
              Calculate
            </Button>
          </div>
          <Typography className={classes.typo}>
            How much can your brand make?
            <ArrowRightAltIcon />
          </Typography>
        </div>
        <div className={classes.mobileBtnBox}>
          <div className={classes.buttonBox}>
            <Button variant="contained" className={classes.Btn}>
              <img src={calculator} alt="" width={18} />
              Calculate
            </Button>
          </div>
          <Typography
            className={classes.typo}
            style={{
              width: '260px',
              textShadow: '2px 2px 1px rgba(0,0,0,0.8)',
            }}
          >
            How much can your brand make?
          </Typography>
        </div>
        <div className={classes.linksBox}>
          <Typography className={classes.linksType}>
            <CheckCircleOutlineIcon className={classes.check} />7 day free trial
          </Typography>
          <Typography className={classes.linksType}>
            <CheckCircleOutlineIcon className={classes.check} />
            No cookie notices required
          </Typography>
          <Typography className={classes.linksType}>
            <CheckCircleOutlineIcon className={classes.check} />
            GDPR compliant
          </Typography>
          <Typography className={classes.linksType}>
            <CheckCircleOutlineIcon className={classes.check} />
            No apps required
          </Typography>
        </div>
      </div>
      <div className={classes.phoneLayer}></div>
      <div>
        <div
          className={clsx(classes.phone, {
            [classes.scrollDownAnimation]: entryIsVisible.isScrolledDown,
            [classes.scrollUpAnimation]: entryIsVisible.isScrolledUp,
          })}
          ref={myRef}
        >
          <PhoneComponent className={classes.PhoneComponent} />
        </div>
      </div>
      <div className={classes.MobilelinksBox}>
        <Typography className={classes.linksType}>
          <CheckCircleOutlineIcon className={classes.check} />7 day free trial
        </Typography>
        <Typography className={classes.linksType}>
          <CheckCircleOutlineIcon className={classes.check} />
          No cookie notices required
        </Typography>
        <Typography className={classes.linksType}>
          <CheckCircleOutlineIcon className={classes.check} />
          GDPR compliant
        </Typography>
        <Typography className={classes.linksType}>
          <CheckCircleOutlineIcon className={classes.check} />
          No apps required
        </Typography>
      </div>
    </div>
  );
};

export default SectionRaise;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '60px',
    letterSpacing: '0.60032px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '60px',
    },
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'center',
      gap: 350,
    },
  },
  subContainer: {
    paddingTop: 40,
    [theme.breakpoints.down('md')]: {
      paddingTop: 40,
    },
  },
  title: {
    display: 'block',
    fontSize: '40px',
    lineHeight: '50px',
    // fontWeight: '800',
    color: '#F6F6F6',
    '& span': {
      background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      backgroundSize: '200% auto',
      animation: '$moveGradient 4s linear infinite',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      lineHeight: '28px  ',
      '& br': {
        display: 'none',
      },
    },
  },

  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  subTitle: {
    marginTop: '12px',
    fontSize: '24px',
    color: '#C9C9C9',
    lineHeight: '40px',
    // fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      marginTop: '15px',
      fontSize: '17px',
      lineHeight: '20px',
      // fontWeight: '400',
      '& br': {
        display: 'block',
      },
    },
  },
  hashTags: {
    color: '#4484FF',

    fontSize: '24px',
    lineHeight: '40px',
    // fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      marginTop: '15px',
      fontSize: '17px',
      lineHeight: '20px',
      // fontWeight: '400',
    },
  },
  btnBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '95px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileBtnBox: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'fixed',
      borderRadius: 50,
      zIndex: 99,
      left: '50%',
      right: '50%',
      bottom: '50px',
    },
  },
  typo: {
    letterSpacing: '0.13132px',
    fontSize: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#F6F6F6',
  },
  phone: {
    width: '350px',

    [theme.breakpoints.down('md')]: {
      width: '260px',
    },
  },
  phoneLayer: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'transparent',
    top: '180px',
    zIndex: 20,
  },
  // PhoneComponent: {
  //   zIndex: 3,
  // },
  linksBox: {
    display: 'flex',
    gap: '36px',
    marginTop: '90px',
    [theme.breakpoints.down('md')]: {
      gap: '10px',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  MobilelinksBox: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: '0px',
      width: '100%',
      marginTop: '40px',
    },
  },
  linksType: {
    display: 'flex',
    // marginTop: '73px',
    gap: '6px',
    color: '#c9c9c9',
    alignItems: 'center',
    fontSize: '12px',
    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
      gap: '3px',
    },
  },
  check: {
    fontSize: '16px',
  },
  scrollDownAnimation: {
    animation: `$Down 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
    animationFillMode: 'forwards',
  },
  '@keyframes Down': {
    '0%': {
      transform: ' translate(0rem, 0rem) rotate(0deg)',
      '-webkit-transform': ' translate(0rem, 0rem) rotate(0deg)',
    },

    '100%': {
      transform: ' translate(1rem , 5rem) rotate(-10deg)',
      '-webkit-transform': ' translate(1rem , 5rem) rotate(-10deg)',
    },
  },
  scrollUpAnimation: {
    animation: `$Up 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
    animationFillMode: 'forwards',
  },
  '@keyframes Up': {
    '0%': {
      transform: ' translate(1rem , 5rem) rotate(-10deg)',
      '-webkit-transform': 'translate(1rem , 5rem) rotate(-10deg)',
    },

    '100%': {
      transform: ' translate(0rem, 0rem)  rotate(0deg)',
      '-webkit-transform': ' translate(0rem, 0rem)  rotate(0deg)',
    },
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    border: 0,
    borderRadius: 50,
    color: 'white',
    padding: '1px',
    backgroundSize: '200% auto',
    animation: '$moveGradient 4s linear infinite',
  },
  Btn: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 50,
    // width: '120px',
    padding: '7px 12px',
    fontSize: '14px',
    width: '120px',

    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'black',
    },
    '& img': {
      marginRight: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      height: '38px',
    },
  },
}));
