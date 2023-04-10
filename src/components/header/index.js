import { useEffect, useState } from 'react';
import {
  Button,
  Fade,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import SvgIcons from '../icons';
import HelpIcon from '@material-ui/icons/Help';
import { Link } from 'react-router-dom';
import SidebarNav from '../sideBar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../../redux/header/header.slicer';
import logo from '../../assets/logos/image4.png';
import logoText from '../../assets/logos/image38.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import googleLogo from '../../assets/logos/google.png';
const Header = () => {
  const { showSideBar } = useSelector((state) => state.Header);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSideBar(!showSideBar));
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classes.container}>
      <Fade in={showSideBar} timeout={800}>
        <div onClick={handleClick} className={classes.backDrop}></div>
      </Fade>

      <div className={classes.drawer}>
        <IconButton onClick={handleClick} className={classes.drawerBtn}>
          {showSideBar !== true ? (
            <MenuIcon style={{ color: 'white', fontSize: '32px' }} />
          ) : (
            <CloseIcon style={{ color: 'black' }} />
          )}
        </IconButton>

        <div className={classes.sideBar}>
          <SidebarNav show={showSideBar} />
        </div>
      </div>

      <div className={classes.sidebarBox}>
        <img src={logo} className={classes.logoM} alt="logo" />
        <img src={logoText} className={classes.logo} alt="logo" />
      </div>
      <img
        src={logoText}
        // className={classes.Mlogo}
        alt="logo"
        className={clsx(classes.Mlogo, {
          [classes.faceAnimation]: isScrolled === true,
          [classes.appearAnimation]: isScrolled === false,
        })}
      />
      <img src={logo} className={classes.MlogoM} alt="logo" />
      <div className={classes.navbarLinks}>
        <div className={classes.links}>
          <Link to="/" className={classes.reactLink}>
            <Typography className={classes.navLinks}>
              <FavoriteIcon style={{ fontSize: '15px' }} />
              Pinned
            </Typography>
          </Link>
          <Link to="/" className={classes.reactLink}>
            <Typography className={classes.navLinks}>
              <SvgIcons drop={true} /> Drops
            </Typography>
          </Link>
          <Link to="/" className={classes.reactLink}>
            <Typography className={classes.navLinks}>
              <SvgIcons career={true} />
              Pricing
            </Typography>
          </Link>
          <Link to="/" className={classes.reactLink}>
            <Typography className={classes.navLinks}>
              <HelpIcon fontSize="small" />
              FAQs
            </Typography>
          </Link>
        </div>
        <div className={classes.line}></div>
        <div className={classes.buttonBox}>
          <Button variant="contained" className={classes.Btn}>
            <img src={googleLogo} alt="" width={25} />
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: ' rgba( 0, 0, 0, 0.55 )',
    backdropFilter: 'blur( 10px )',
    padding: '12px 65px',
    color: '#fff',
    height: '49px',
    position: 'fixed',
    top: '0',
    width: 'calc(100% - 130px)',
    zIndex: 100,
    [theme.breakpoints.down('md')]: {
      padding: '12px 50px',
      width: 'calc(100% - 100px)',
      flexDirection: 'row-reverse',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '12px 50px',
      width: 'calc(100% - 200px)',
      flexDirection: 'row-reverse',
    },

    [theme.breakpoints.down('sm')]: {
      padding: '0 20px',
      width: 'calc(100% - 40px)',
      // width: '100vw',
      // justifyContent: 'flex-Start',
      gap: '30px',
    },
  },
  drawer: {
    display: 'none',
    flexWrap: 'noWrap',
    zIndex: 1000,

    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
    '.MuiIconButton-root': {
      padding: 0,
    },
  },
  sideBar: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
  },
  drawerBtn: {
    width: '35px',
    display: 'flex',
    justifyContent: 'flex-start',
    zIndex: 20,
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-end',
    },
  },
  sidebarBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    paddingLeft: '34px',
    [theme.breakpoints.down('md')]: {
      // flexDirection: 'row-reverse',
      // justifyContent: 'space-between',
      // width: 'calc(100% - 48px)',
      paddingLeft: '0',
      display: 'none',
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '314px',
    },
  },
  logo: {
    width: '117px',
  },
  Mlogo: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      // width: '82px',
      // height: '32px',
      width: '99px',
      height: '49px',
    },
  },
  logoM: {
    width: '34px',
  },
  MlogoM: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '32px',
      height: '32px',
      transition: 'opacity 1s ease-out',
    },
  },

  faceAnimation: {
    opacity: 1,
    animation: '$face-animation 1s ease-out forwards',
  },
  '@keyframes face-animation': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
  appearAnimation: {
    opacity: 0,
    animation: '$appear-animation 1s ease-out forwards',
  },
  '@keyframes appear-animation': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  links: {
    display: 'flex',
    gap: '40px',
  },
  navLinks: {
    fontSize: '14px',
    // fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },

  navbarLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    paddingRight: '34px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
      paddingRight: '0px',
    },
    [theme.breakpoints.up('xl')]: {
      paddingRight: '314px',
    },
  },
  line: {
    width: '1px',
    height: '36px',
    minHeight: 'auto',
    marginRight: '24px',
    marginLeft: '12px',
    backgroundColor: 'hsla(0,0%,100%,.2)',
  },
  reactLink: {
    textDecoration: 'none',
    color: 'white',
  },
  backDrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 1,
    zIndex: 999,
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    border: 0,
    borderRadius: 50,
    color: 'white',
    padding: '0 1px',
  },
  Btn: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 50,
    padding: '2px 10px',
    fontSize: '14px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'black',
    },
    '& img': {
      marginRight: 10,
    },
  },
}));
