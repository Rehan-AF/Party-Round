import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

const Text = ({ children }) => {
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
        rootMargin: '-120px',
      }
    );
    observer.observe(myRef.current);
  }, []);

  return (
    <Typography
      className={clsx(classes.typo, {
        [classes.scrollUpAnimationOne]: cardvisible === false,
        [classes.scrollDownAnimationOne]: cardvisible === true,
      })}
      ref={myRef}
    >
      {children}
    </Typography>
  );
};

export default Text;
const useStyles = makeStyles((theme) => ({
  typo: {
    display: 'inline',
    // fontWeight: 600,
    fontSize: '35px',
    lineHeight: '35px',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      lineHeight: '28px',
    },
    color: '#f6f6f6',
  },
  scrollUpAnimationOne: {
    color: '#4d4d4d',
    textDecoration: 'line-through',
    textDecorationColor: 'black',
    transition: '1000ms',
  },
  scrollDownAnimationOne: {
    transition: '1000ms',
    textDecoration: 'none',
  },
}));
