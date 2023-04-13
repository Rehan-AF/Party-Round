import React from 'react';
import { Grid } from '../grid';
import { makeStyles } from '@material-ui/core';

export const GridOne = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid c12="#cc4065" />
      <Grid c11="#2b2fa1" c12="#ecc62f" />
      <Grid c12="#378379" />
      <Grid c11="#7b142d" />
      <Grid c9="#30122a" c10="#17261f" />
      <Grid />
      <Grid c1="#378379" />
      <Grid c2="#ecc62f" />
      <Grid />
      <Grid />
      <Grid />
      <div className={classes.lar}>
        <Grid c11="#2b2fa1" />
      </div>
    </div>
  );
};

export const Gridtwo = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid />
      <Grid />
      <Grid />
      <Grid c12="#cc4065" />
      <Grid c11="#7b142d" c12="#30122a" />
      <Grid c10="#a6551e" c11="#17261f" />
      <Grid />
      <Grid />
      <Grid c1="#cc4065" />
      <Grid c2="#a6551e" />
      <div className={`${classes.lar} ${classes.exLar}`}>
        <Grid c9="#17261f" c10="#2b2fa1" />
        <Grid c8="#30122a" c9="#ecc62f" c10="#7b142d" c11="#cc4065" />
      </div>

      <Grid c12="#7b142d" />
      <Grid c8="#a6551e" c11="#ecc62f" />
      <Grid c1="#17261f" c2="#cc4065" />
      <Grid c2="#ecc62f" c3="#378379" />
      <Grid c1="#2b2fa1" c8="#cc4065" c9="#2b2fa1" c10="#ecc62f" />
      <Grid c11="#378379" />
      <div className={classes.mid}>
        <Grid c10="#7b142d" c12="#30122a" />
      </div>
      <div className={classes.onlyLar}>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </div>
    </div>
  );
};

export const GridThree = () => {
  return (
    <div>
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid c2="#7b142d" />
      <Grid c1="#ecc62f" />
      <Grid c2="#cc4065" />
      <Grid />
      <Grid />
      <Grid />
    </div>
  );
};
export const GridFour = () => {
  return (
    <div>
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
    </div>
  );
};

export const GridFive = () => {
  const classes = useStyles();
  return (
    <div>
      {/**
colors 
#cc4065
#2b2fa1
#ecc62f
#378379
#7b142d
#30122a
#a6551e
#17261f
*/}
      <div className={classes.onlyLar}>
        <Grid c12="#2b2fa1" c1="#ff045f" />
        <Grid c2="#ff045f" c3="#378379" c11="#3890ff" c10="#7b142d" />
        <Grid c4="#ffb039" />
        <Grid c12="#8e36ff" />
        <Grid />
      </div>
      <Grid />
      <Grid />
      <Grid />
      <div className={classes.onlyMid}>
        <Grid c1="#378379" c12="#e01fd9" />
        <Grid c2="#3de5c2" c11="#ff045f" c10="#9995fe" />
        <Grid c2="#3de5c2" c3="#ff8b37" c10="#30122a" />
      </div>
      <div className={classes.onlyLar}>
        <Grid c12="#e01fd9" c1="#378379" />
        <Grid c11="#ff045f" c2="#3de5c2" />
        <Grid c12="#30122a" />
        <Grid c1="#8e36ff" />
      </div>
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
    </div>
  );
};
export const GridSix = () => {
  return (
    <div>
      <Grid c3="#64e3f5" />
      <Grid c4="#79ffb4" c5="#4ff898" />
      <Grid c5="#4dceff" c6="#5ce6ff" c8="#4ff2cd" c9="#52f5d6" />
      <Grid
        c1="#3ba7fe"
        c3="#83a1ff"
        c4="#83a1ff"
        c5="#8f8ffe"
        c7="#42befe"
        c8="#45d2dd"
        c9="#43c3ff"
        c10="#43c3ff"
        c11="#3ba3ff"
      />
      <Grid
        c1="#4b9ffe"
        c2="#63a2fe"
        c3="#8c99ff"
        c4="#998cfe"
        c5="#8996fe"
        c6="#7a94fc"
        c7="#6e8dfc"
        c8="#7d8fff"
        c9="#9e6efc"
        c10="#8f6dfa"
        c11="#7d6af8"
        c12="#896af8"
        opacity={1}
      />
      <Grid
        c1="#9ba7ff"
        c2="#a597ff"
        c3="#8d9aff"
        c4="#a489fe"
        c5="#c286fb"
        c6="#c28afa"
        c7="#cf7ff0"
        c8="#c671ec"
        c9="#bb62e2"
        c10="#ab55da"
        c11="#aa4fd2"
        c12="#9d4ad0"
        opacity={1}
      />
      <Grid
        c1="#9995fe"
        c2="#ca83fe"
        c3="#dc80fe"
        c4="#c97cfb"
        c5="#d882f6"
        c6="#dd80eb"
        c7="#e17ae5"
        c8="#e079e6"
        c9="#d73fc5"
        c10="#cc3199"
        c11="#bf319f"
        c12="#d43ea1"
        opacity={1}
      />
      <Grid
        c1="#8a92fe"
        c2="#c373fe"
        c3="#e581fa"
        c4="#e97ef5"
        c5="#e97df6"
        c6="#c97cfb"
        c7="#f07bde"
        c8="#e84eb9"
        c9="#e74cb8"
        c10="#e32e98"
        c11="#e72b73"
        c12="#e72b73"
        opacity={1}
      />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  lar: {
    opacity: 0,

    [theme.breakpoints.down('md')]: {
      opacity: 1,
    },
    [theme.breakpoints.up('xl')]: {
      opacity: 1,
    },
  },
  mid: {
    opacity: 0,
    [theme.breakpoints.up('lg')]: {
      opacity: 1,
    },
    [theme.breakpoints.down('sm')]: {
      opacity: 1,
    },
  },
  exLar: {
    [theme.breakpoints.up('xl')]: {
      opacity: 0,
    },
  },
  onlyLar: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  onlyMid: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));
