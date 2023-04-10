import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logoText from '../../assets/logos/image38.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import mediumIcon from '../../assets/logos/medium.png';
import tiktokIcon from '../../assets/logos/tiktok.png';
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imgBox}>
        <img src={logoText} alt="logo" className={classes.logo} />
      </div>
      <div className={classes.socialLinksBox}>
        <hr />
        <Link to="/" className={classes.socialLinks}>
          <InstagramIcon />
        </Link>
        <Link to="/" className={classes.socialLinks}>
          <TwitterIcon />
        </Link>
        <Link to="/" className={classes.socialLinks}>
          <LinkedInIcon />
        </Link>
        <Link to="/" className={classes.socialLinks}>
          <img src={mediumIcon} alt="as" />
        </Link>
        <Link to="/" className={classes.socialLinks}>
          <img src={tiktokIcon} alt="as" />
        </Link>
        <hr />
      </div>
      <div>
        <Typography className={classes.typo}>
          Playe and all representations of its logo, brand mark and icon are
          held solely by Playe Limited. All rights reserved.
        </Typography>
      </div>
      <div className={classes.subContainer}>
        <div className={classes.link2Box}>
          <Typography className={classes.subHead}>About us </Typography>
          <Typography className={classes.subHead}>Roadmap </Typography>
        </div>
        <div className={classes.centerBox}>
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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
      gridRowGap: '18px',
    },
  },
  logo: {
    width: '125px',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '15px',
      width: '86px',
    },
  },

  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '11px  ',
    [theme.breakpoints.down('md')]: {
      order: -1,
      gridColumnStart: 1,
      gridColumnEnd: 4,
    },
  },
  typo: {
    fontSize: '12px',
    color: '#CACFDB',
    margin: '25px 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '8px',
      textAlign: 'center',
    },
  },
  typo2: {
    fontSize: '12px',
    // fontWeight: '500',
    color: '#CACFDB',
    [theme.breakpoints.down('md')]: {
      fontSize: '8px',
      textAlign: 'center',
    },
  },

  linksBox: {
    display: 'flex',
    gap: '10px',
    '& span': {
      borderLeft: '1px solid #7691AD',
    },
  },
  links: {
    '& p': {
      textDecoration: 'underline',
      // fontWeight: '600',
      color: '#FFFFFF',
      fontSize: '14px',
      [theme.breakpoints.down('md')]: {
        fontSize: '10px',
      },
    },
  },
  socialLinksBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '28px',
    '& hr': {
      width: '300px',
      [theme.breakpoints.down('md')]: {
        width: '100px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '60px',
      },
    },
    [theme.breakpoints.down('md')]: {
      gap: '10px',
    },
  },
  subHead: {
    fontSize: '12px',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
    },
  },
  socialLinks: {
    textDecoration: 'none',
    color: '#FFFFFF',
    '& svg': {
      fontSize: '30px',
      opacity: '80%',
    },
    '& img': {
      opacity: '80%',
      width: '28px',
    },
  },
}));
