import { Button, makeStyles, Typography, useTheme } from '@material-ui/core';
import React from 'react';
// import CustomBotton from '../buttons';
// import { useScrollDirection } from '../../hooks';
// import clsx from 'clsx';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// import Typed from 'typed.js';
// import PhoneComponent from '../phone component';
import calculator from '../../assets/logos/calculator.jpeg';
import backgroundVideo from '../../assets/videos/Tetris.mp4';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: '7 day free trial',
  },
  {
    label: 'No cookie notices required',
  },
  {
    label: 'GDPR compliant',
  },
  {
    label: 'No apps required',
  },
];

const SectionRaise = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  // const boxRef = useRef(null);
  // const myRef = useRef();

  // const scrollDirection = useScrollDirection(myRef);
  // const [entryIsVisible, setEntryIsVesible] = useState({
  //   isScrolledUp: false,
  //   isScrolledDown: false,
  // });
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     if (window.pageYOffset < 8) {
  //       setEntryIsVesible((prev) => ({
  //         ...prev,
  //         isScrolledDown: false,
  //         isScrolledUp: entry.isIntersecting,
  //       }));
  //     } else {
  //       if (scrollDirection === 'up') {
  //         setEntryIsVesible((prev) => ({
  //           ...prev,
  //           isScrolledDown: false,
  //           isScrolledUp: entry.isIntersecting,
  //         }));
  //       } else if (scrollDirection === 'down') {
  //         setEntryIsVesible((prev) => ({
  //           ...prev,
  //           isScrolledDown: entry.isIntersecting,
  //           isScrolledUp: false,
  //         }));
  //       } else {
  //         setEntryIsVesible((prev) => ({
  //           ...prev,
  //           isScrolledDown: false,
  //           isScrolledUp: false,
  //         }));
  //       }
  //     }
  //   });
  //   observer.observe(myRef.current);
  // }, [scrollDirection]);
  // useEffect(() => {
  //   const typed = new Typed('.typing', {
  //     strings: ['engagement', 'revenues'],
  //     typeSpeed: 80,
  //     backSpeed: 60,
  //     backDelay: 1000,
  //     loop: false,
  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    // <div className={classes.container} ref={boxRef}>
    <div className={classes.container}>
      <video
        className={classes.videoTag}
        src={backgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={classes.main}>
        <div className={classes.subContainer}>
          <Typography className={classes.title}>
            <b>
              <i>take</i>
            </b>{' '}
            the <span>leap</span>,
          </Typography>
          <Typography className={classes.gradientTitle}>
            take the{' '}
            <b>
              <i>win</i>
            </b>
            <span>.</span>
          </Typography>
          <Typography className={classes.subTitle}>
            Level-up your bottom line, host a game.
          </Typography>
          {/* <Typography className={classes.hashTags}>#GoodGame #GG</Typography> */}
          <div className={classes.btnBox}>
            <div className={classes.buttonBox}>
              <Button variant="contained" className={classes.Btn}>
                <img src={calculator} alt="" width={18} />
                Calculate
              </Button>
            </div>
            <Typography className={classes.typo}>
              How much can your brand make?
            </Typography>
          </div>
          <div className={classes.mobileBtnBox}>
            <div className={classes.buttonBox}>
              <Button variant="contained" className={classes.Btn}>
                <img src={calculator} alt="" width={18} />
                Calculate
              </Button>
            </div>
            <Typography
              className={classes.typo}
              style={{
                width: '174px',
                textShadow: '2px 2px 1px rgba(0,0,0,0.8)',
              }}
            >
              How much can your brand make?
            </Typography>
          </div>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            className={classes.carousel}
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label} className={classes.linksBox}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Typography className={classes.linksType}>
                    <CheckCircleOutlineIcon className={classes.check} />
                    {step.label}
                  </Typography>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          {/* <div className={classes.linksBox}>
            <Typography className={classes.linksType}>
              <CheckCircleOutlineIcon className={classes.check} />7 day free
              trial
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
          </div> */}
        </div>

        <div>
          {/* <div
          className={clsx(classes.phone, {
            [classes.scrollDownAnimation]: entryIsVisible.isScrolledDown,
            [classes.scrollUpAnimation]: entryIsVisible.isScrolledUp,
          })}
          ref={myRef}
        >
          <PhoneComponent className={classes.PhoneComponent} />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default SectionRaise;
const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  videoTag: {
    width: '100vw',
    height: '100vh',
    objectFit: ' fill',
    objectPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      objectFit: ' cover',
    },
  },
  main: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60px',
    letterSpacing: '0.60032px',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '60px',
      top: -160,
    },
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'center',
      gap: 350,
    },
  },
  subContainer: {
    paddingTop: 40,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      paddingTop: 40,
    },
  },
  title: {
    display: 'block',
    fontSize: '78px',
    lineHeight: '78px',
    // fontWeight: '800',
    fontFamily: "'Inter', sans-serif",

    color: '#F6F6F6',

    [theme.breakpoints.down('md')]: {
      fontSize: '50px',
      lineHeight: '50px  ',
    },
  },
  gradientTitle: {
    display: 'block',
    fontSize: '78px',
    // fontWeight: '800',
    lineHeight: '78px',

    fontFamily: "'Inter', sans-serif",

    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '200% auto',
    animation: '$moveGradient 4s linear infinite',
    '& span': {
      color: '#F6F6F6',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '50px',
      lineHeight: '50px  ',
    },
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  subTitle: {
    marginTop: '12px',
    fontSize: '17px',
    color: '#C9C9C9',
    lineHeight: '40px',
    // fontWeight: '500',

    [theme.breakpoints.down('sm')]: {
      marginTop: '15px',
      fontSize: '16px',
      lineHeight: '16px',
      width: '313px',
      '& br': {
        display: 'block',
      },
    },
  },
  hashTags: {
    color: '#4484FF',

    fontSize: '24px',
    lineHeight: '40px',
    // fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      marginTop: '15px',
      fontSize: '17px',
      lineHeight: '20px',
      // fontWeight: '400',
    },
  },
  btnBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '39px',
    gap: '31px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileBtnBox: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'fixed',
      borderRadius: 50,
      zIndex: 99,
      left: '50%',
      right: '50%',
      bottom: '50px',
    },
  },
  typo: {
    letterSpacing: '0.13132px',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#F6F6F6',
  },
  phone: {
    width: '350px',

    [theme.breakpoints.down('md')]: {
      width: '260px',
    },
  },

  // PhoneComponent: {
  //   zIndex: 3,
  // },
  linksBox: {
    marginTop: '90px',
  },
  // MobilelinksBox: {
  //   display: 'none',

  //   [theme.breakpoints.down('sm')]: {
  //     display: 'flex',
  //     // flexWrap: 'wrap',
  //     flexDirection: 'column',
  //     justifyContent: 'start',
  //     alignItems: 'center',
  //     gap: '0px',
  //     width: '100%',
  //   },
  // },
  linksType: {
    display: 'flex',
    // marginTop: '73px',
    gap: '6px',
    color: '#c9c9c9',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
      gap: '3px',
    },
  },
  check: {
    fontSize: '16px',
  },
  scrollDownAnimation: {
    animation: `$Down 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
    animationFillMode: 'forwards',
  },
  '@keyframes Down': {
    '0%': {
      transform: ' translate(0rem, 0rem) rotate(0deg)',
      '-webkit-transform': ' translate(0rem, 0rem) rotate(0deg)',
    },

    '100%': {
      transform: ' translate(1rem , 5rem) rotate(-10deg)',
      '-webkit-transform': ' translate(1rem , 5rem) rotate(-10deg)',
    },
  },
  scrollUpAnimation: {
    animation: `$Up 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
    animationFillMode: 'forwards',
  },
  '@keyframes Up': {
    '0%': {
      transform: ' translate(1rem , 5rem) rotate(-10deg)',
      '-webkit-transform': 'translate(1rem , 5rem) rotate(-10deg)',
    },

    '100%': {
      transform: ' translate(0rem, 0rem)  rotate(0deg)',
      '-webkit-transform': ' translate(0rem, 0rem)  rotate(0deg)',
    },
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    border: 0,
    borderRadius: 50,
    color: 'white',
    padding: '1px',
    backgroundSize: '200% auto',
    animation: '$moveGradient 4s linear infinite',
  },
  Btn: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 50,
    // width: '120px',
    padding: '7px 12px',
    fontSize: '14px',
    width: '120px',

    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'black',
    },
    '& img': {
      marginRight: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      height: '38px',
    },
  },
  carousel: {
    position: 'relative',
    top: -55,
    [theme.breakpoints.down('sm')]: {
      top: -45,
    },
  },
}));
