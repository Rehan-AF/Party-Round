import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Fingerprint from '../../assets/fingerPrint.png';
import background from '../../assets/bg.jpeg';
const Security = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        Security measures powered by A.I.
      </Typography>
      <img src={Fingerprint} alt="" className={classes.print} />
      <Typography className={classes.description}>
        Minimise the risk of fraud with built in Optical Character Recognition
        technology for automatic verification of purchase receipts based on the
        content of the ticket.
      </Typography>
      <div className={classes.typoBox}>
        <Typography className={classes.Typo}>
          We are on a mission to reshape the way <br /> consumers engage with
          brands
        </Typography>
      </div>
    </div>
  );
};

export default Security;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
  },
  title: {
    fontSize: '35px',
    // fontWeight: '800',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      // fontWeight: '600',
    },
  },
  print: {
    width: '250px',
    height: '125px',
    [theme.breakpoints.down('md')]: {
      width: '200px',
      height: '100px',
    },
  },
  description: {
    fontSize: '24px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '17px',
    },
  },
  typoBox: {
    backgroundImage: `url(${background})`,
    flexGrow: 1,
    width: '100%',
    borderRadius: '30px',
    padding: '245px 0',
    backgroundSize: 'cover',
    marginTop: '100px',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center',
      padding: '70px 0',
      height: '524px',
      marginTop: '55px',
    },
    '&:before': {
      content: 'nasdasdasdone',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#121212',
      opacity: 0,
      filter: 'grayscale(00%)',
    },
  },
  Typo: {
    fontSize: '40px',
    // fontWeight: '700',
    color: 'rgba(192, 192, 192, 0.9)',
    opacity: '90%',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginLeft: '75px',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      // fontWeight: '600',
      marginLeft: '11px',
    },
  },
}));
