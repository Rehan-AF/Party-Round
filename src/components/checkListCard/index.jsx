import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import SvgIcons from '../icons';
const CheckListCard = () => {
  const classes = useStyles();
  const [cardvisible, setEntryIsVesible] = useState(false);
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setEntryIsVesible(entry.isIntersecting, 'entry');
      },
      {
        rootMargin: '-100px',
      }
    );
    observer.observe(myRef.current);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.divOne}></div>
      <div className={classes.divtwo}>
        <div className={classes.subDiv}>
          {cardvisible ? (
            <SvgIcons check={true} className={classes.icons} />
          ) : (
            <SvgIcons loading={true} className={classes.iconsLoading} />
          )}
          <div>
            <Typography className={classes.typo}>
              Customer engagement
            </Typography>
          </div>
        </div>
        <div className={classes.subDiv}>
          {cardvisible ? (
            <SvgIcons check={true} className={classes.icons} />
          ) : (
            <SvgIcons loading={true} className={classes.iconsLoading} />
          )}
          <Typography className={classes.typo} ref={myRef}>
            Increase your ATV
          </Typography>
        </div>
        <div className={classes.subDiv}>
          {cardvisible ? (
            <SvgIcons check={true} className={classes.icons} />
          ) : (
            <SvgIcons loading={true} className={classes.iconsLoading} />
          )}
          <Typography className={classes.typo}>Become discoverable </Typography>
        </div>
      </div>
    </div>
  );
};

export default CheckListCard;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '400px',
    backgroundColor: '#222',
    padding: '0 32px 15px 32px',
    border: '2px solid hsla(0,0%,100%,.06)',
    borderRadius: '1.3rem',
    boxShadow: '0 4px 12px 6px rgb(0 0 0 / 24%)',
    position: 'relative',
    height: '227px',
    [theme.breakpoints.down('md')]: {
      width: '300px',
      height: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '270px',
    },
  },
  subDiv: {
    display: 'flex',
    gap: '20px',
    fontSize: '1.1rem',
    backgroundColor: '#222',
    padding: '2px',
  },
  icons: {
    width: '30px',
    animation: `$DownOne 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,

    [theme.breakpoints.down('md')]: {
      width: '25px',
    },
  },
  '@keyframes DownOne': {
    '0%': {
      opacity: 0,
    },

    '100%': {
      opacity: 1,
    },
  },
  iconsLoading: {
    width: '30px',
    animation: `$loading 1000ms  ${theme.transitions.easing.easeInOut}  infinite`,

    [theme.breakpoints.down('md')]: {
      width: '25px',
    },
  },

  '@keyframes loading': {
    '0%': {
      transform: ' rotate(0)',
    },

    '100%': {
      transform: ' rotate(360deg)',
    },
  },
  typo: {
    fontSize: '1.7rem',
    opacity: '90%',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
  },
  divOne: {
    padding: '15px',
    borderRight: '2px solid hsla(0,0%,100%,.06)',
  },
  divtwo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '17px',
    position: 'absolute',
    left: '30px',
    [theme.breakpoints.down('md')]: {
      left: '32px',
    },
  },
  loading: {
    width: '25px',
    height: '25px',
  },
}));
