import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
// import CustomBotton from '../buttons';
import { GridSix } from '../gridView';
import { SGridEight } from '../gridView/smallGrid';
import rocket from '../../assets/rocket.png';
const JoinParty = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <GridSix />
      </div>
      <div className={classes.gridSmall}>
        <SGridEight />
      </div>
      <div className={classes.subContainer}>
        <Typography className={classes.title}>
          Take the leap, take the win.
        </Typography>
        <div className={classes.buttonBox}>
          <Button className={classes.Btn}>
            <img src={rocket} alt="" width={25} />
            <div>Get Started</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinParty;
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '3rem',
    lineHeight: '1',
    // fontWeight: '600',
    textAlign: 'center',
    color: '#f6f6f6',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
      marginBottom: '50px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '44px',
    position: 'relative',
  },
  grid: {
    width: 'calc(100vw - 0px)',
    // width: "100vw",
    // position: "absolute",
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  gridSmall: {
    width: '100vw',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  subContainer: {
    position: 'absolute',
    bottom: '150px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    border: 0,
    borderRadius: 50,
    color: 'white',
    padding: '2px',
    backgroundSize: '200% auto',
    animation: '$moveGradient 4s linear infinite',
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  Btn: {
    backgroundColor: 'black',
    color: 'white',
    // width: '120px',
    fontSize: '14px',
    borderRadius: 50,
    textTransform: 'capitalize',
    '&.MuiButton-label': {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    '&:hover': {
      backgroundColor: 'black',
    },
  },
}));
