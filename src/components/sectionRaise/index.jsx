import { makeStyles, Typography } from '@material-ui/core';
import React, { useRef, useEffect, useState } from 'react';
import CustomBotton from '../buttons';
import img from '../../assets/phonr_main.png';
import { useScrollDirection } from '../../hooks';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import clsx from 'clsx';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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
  return (
    <div className={classes.container} ref={boxRef}>
      <div>
        <Typography className={classes.title}>
          Power-up your receipts and drive <br /> <i>engagement </i> <i> </i>to
          new heights.
        </Typography>
        <Typography className={classes.subTitle}>
          Reinvent your customer roadmap by introducing in-browser gameplays
          with qualifying purchases.
          <br /> <span>#GoodGame</span> <span>#GG</span>
        </Typography>
        <div className={classes.btnBox}>
          <CustomBotton variant="simple" children="Get started" />
          <Typography className={classes.typo}>
            Schedule a product demo
            <ArrowRightAltIcon />
          </Typography>
        </div>
        <div className={classes.mobileBtnBox}>
          <CustomBotton
            variant="simple"
            children="Join Waitlist"
            style={{
              width: '250px',
              height: '38px',
              boxShadow: '4px 4px 8px rgba(0,0,0,0.5)',
            }}
          />
          <Typography
            className={classes.typo}
            style={{
              width: '186px',
              textShadow: '2px 2px 1px rgba(0,0,0,0.8)',
            }}
          >
            Schedule a product demo
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
      <div>
        <img
          src={img}
          alt="phone"
          className={clsx(classes.phone, {
            [classes.scrollDownAnimation]: entryIsVisible.isScrolledDown,
            [classes.scrollUpAnimation]: entryIsVisible.isScrolledUp,
          })}
          ref={myRef}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60px',
    letterSpacing: '0.60032px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  title: {
    display: 'block',
    fontSize: '40px',
    lineHeight: '50px',
    fontWeight: '800',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      lineHeight: '28px  ',
      '& br': {
        display: 'none',
      },
    },
  },
  // mobTitle: {
  //   display: 'none',
  //   fontSize: '40px',
  //   lineHeight: '50px',
  //   fontWeight: '800',
  //   [theme.breakpoints.down('md')]: {
  //     fontSize: '28px',
  //     lineHeight: '28px  ',
  //     display: 'block',
  //   },
  // },
  subTitle: {
    marginTop: '12px',
    fontSize: '24px',
    color: 'hsla(0,0%,100%,.7)',
    lineHeight: '40px',
    fontWeight: 'bold',
    '& br': {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '15px',
      fontSize: '17px',
      lineHeight: '20px',
      fontWeight: '400',
      '& br': {
        display: 'block',
      },
    },
    '& span': {
      color: '#4484FF',
    },
  },
  btnBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '64px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileBtnBox: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 10,
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
  },
  phone: {
    width: '350px',

    [theme.breakpoints.down('sm')]: {
      width: '260px',
    },
  },
  linksBox: {
    display: 'flex',
    gap: '36px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  MobilelinksBox: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      gap: '15px',
      flexWrap: 'wrap',
      display: 'flex',
      marginTop: '40px',
      width: '100%',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      gap: '0px',
    },
  },
  linksType: {
    display: 'flex',
    marginTop: '73px',
    gap: '6px',
    color: '#757575E0',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
    },
  },
  check: {
    fontSize: '20px',
  },
  scrollDownAnimation: {
    animation: `$Down 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
  },
  '@keyframes Down': {
    '0%': {
      transform: ' translate(0rem, 0rem) rotate(0deg)',
    },

    '100%': {
      transform: ' translate(1rem , 5rem) rotate(-10deg)',
    },
  },
  scrollUpAnimation: {
    animation: `$Up 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
  },
  '@keyframes Up': {
    '0%': {
      transform: ' translate(1rem , 5rem) rotate(-10deg)',
    },

    '100%': {
      transform: ' translate(0rem, 0rem)  rotate(0deg)',
    },
  },
}));
