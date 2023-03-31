import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/logos/footer.png';
import logoText from '../../assets/logos/image38.png';
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imgBox}>
        <img src={footerLogo} alt="" className={classes.logos} />
      </div>
      <div className={classes.subContainer}>
        <div>
          <Typography className={classes.typo1}>
            Playe and all representations of its logo, brand mark and icon{' '}
            <br /> are held solely by Playe Limited. All rights reserved.
          </Typography>
        </div>
        <div className={classes.centerBox}>
          <img src={logoText} alt="logo" className={classes.logo} />
          <Typography className={classes.typo2}>
            Copyright © 2023 Playe, Limited.
          </Typography>
          <div className={classes.linksBox}>
            <Link to="/" className={classes.links}>
              <Typography>Legal Stuff</Typography>
            </Link>
            <span></span>
            <Link to="/" className={classes.links}>
              <Typography>Privacy Policy</Typography>
            </Link>
            <span></span>
            <Link to="/" className={classes.links}>
              <Typography>Security</Typography>
            </Link>
          </div>
        </div>
        <div className={classes.link2Box}>
          <Typography className={classes.head}>Company </Typography>
          <Typography className={classes.subHead}>About us </Typography>
          <Typography className={classes.subHead}>Roadmap </Typography>
        </div>
        <div className={classes.link2Box}>
          <Typography className={classes.head}>Discover </Typography>
          <Typography className={classes.subHead}>Case studies</Typography>
          <Typography className={classes.subHead}>Product Roadmap</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '80px 100px 20px 100px',
    [theme.breakpoints.down('md')]: {
      padding: '20px 20px 20px 20px',
    },
  },
  imgBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  subContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '50px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      paddingTop: '30px',
    },
  },
  logo: {
    width: '86px',
  },
  logos: {
    width: 'calc(100% - 300px)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    position: 'center',
  },
  typo1: {
    fontSize: '12px',
    color: '#CACFDB',
    flex: '1 1 auto',
    textAlign: 'center',
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '11px  ',
  },
  typo2: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#CACFDB',
  },

  linksBox: {
    display: 'flex',
    gap: '10px',
    '& span': {
      borderLeft: '1px solid #7691AD',
    },
  },
  links: {
    textDecoration: 'underline',
    fontWeight: '600',
    color: '#FFFFFF',
  },
}));
