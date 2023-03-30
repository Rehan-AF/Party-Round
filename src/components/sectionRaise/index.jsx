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
          with qualifying purchases. <span>#GoodGame</span> <span>#GG</span>
        </Typography>
        <div className={classes.btnBox}>
          <CustomBotton variant="simple" children="Get started" />
          <Typography className={classes.typo}>
            Schedule a product demo
            <ArrowRightAltIcon />
          </Typography>
        </div>
        <div className={classes.linksBox}>
          <Typography className={classes.linksType}>
            <CheckCircleOutlineIcon className={classes.check} />
            {/* <img src={check} alt="tick" />*/}7 day free trial
          </Typography>
          <Typography className={classes.linksType}>
            <CheckCircleOutlineIcon className={classes.check} />
            {/* <img src={check} alt="tick" /> */}
            No cookie notices required
          </Typography>
          <Typography className={classes.linksType}>
            <CheckCircleOutlineIcon className={classes.check} />
            {/* <img src={check} alt="tick" /> */}
            GDPR compliant
          </Typography>
          <Typography className={classes.linksType}>
            <CheckCircleOutlineIcon className={classes.check} />
            {/* <img src={check} alt="tick" /> */}
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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  title: {
    fontSize: '40px',
    lineHeight: '50px',
    fontWeight: '800',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8rem',
    },
  },
  subTitle: {
    marginTop: '12px',
    fontSize: '24px',
    color: 'hsla(0,0%,100%,.7)',
    lineHeight: '40px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      lineHeight: '20px',
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
      width: '350px',
    },
  },
  linksBox: {
    display: 'flex',
    gap: '36px',
    [theme.breakpoints.down('md')]: {
      gap: '15px',
      flexWrap: 'wrap',
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
      marginTop: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
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
