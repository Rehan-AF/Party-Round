import { makeStyles, Typography } from '@material-ui/core';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React, { useEffect, useRef, useState } from 'react';
import video1 from '../../assets/videos/Video1.mp4';
import video2 from '../../assets/videos/Video2.mp4';
import video3 from '../../assets/videos/Video3.mp4';
import { WrappedListener } from '../pricing';
import './index.css';
const videoData = [
  {
    title: 'Receipt scanned',
    description:
      'A.I powered verification system used to ensure a valid game entry.',
    src: video1,
  },
  {
    title: 'Immersive gameplay',
    description:
      'Your brands engagement taken to  new heights from our library of games.',
    src: video2,
  },
  {
    title: 'Purposefully deployed',
    description:
      'Dependent on campaign, players can enjoy an instant win or enter in to a prize pool competition.',
    src: video3,
  },
];
const StepsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const classes = useStyles();

  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRefs.current[0].play();
        }
      });
    });
    observer.observe(videoRefs.current[0]);
  }, []);

  function handleVideoEnded(index) {
    if (index < videoData.length - 1) {
      videoRefs.current[index + 1].play();
      setActiveIndex(index + 1);
    } else {
      videoRefs.current[0].play();
      setActiveIndex(0);
    }
  }
  console.log(activeIndex, 'active index');
  const updatePlace = (currentSlide) => {
    const index = Math.round(currentSlide);
    setActiveIndex(index);
  };
  return (
    <div>
      <Typography className={classes.smTitle}>CUSTOMER JOURNEY</Typography>
      <Typography className={classes.title}>
        We give your receipt <span>superpowers</span>
      </Typography>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        isIntrinsicHeight
        infinite={false}
        touchEnabled={window.innerWidth > 960 ? false : true}
        dragEnabled={window.innerWidth > 960 ? false : true}
        totalSlides={
          window.innerWidth > 525 ? 2 : window.innerWidth > 960 ? 3 : 3
        }
        visibleSlides={window.innerWidth < 960 ? 1.15 : 3}
        currentSlide={window.innerWidth > 960 ? 1 : activeIndex}
        enableSwipe={window.innerWidth > 960 ? false : true}
        preventMovementUntilSwipeScrollTolerance={true}
        className={classes.final}
      >
        <WrappedListener updatePlace={updatePlace} />
        <Slider className={`${classes.tray} mainTray`}>
          {videoData.map(({ src, title, description }, i) => (
            <Slide
              index={i}
              key={i}
              className={`${classes.swiper} ${
                activeIndex === i
                  ? `mobileSwiper-slide-active ${classes.swiperSlideActive}`
                  : 'mobileSwiper-slide-notActive'
              }`}
            >
              <div className={classes.card}>
                <video
                  className={classes.img}
                  src={src}
                  alt="image_failed_to_load"
                  ref={(el) => (videoRefs.current[i] = el)}
                  onEnded={() => handleVideoEnded(i)}
                  autoPlay={false}
                  muted={true}
                  controls={false}
                  playsInline={true}
                  onTimeUpdate={(event) => {
                    const progressBar = event.target.nextElementSibling;
                    const progress =
                      (event.target.currentTime / event.target.duration) * 100;
                    progressBar.value = progress;
                  }}
                />
                <progress
                  className={classes.progressBar}
                  value={0}
                  max={100}
                ></progress>
                <div className={classes.borderMain}>
                  <Typography className={classes.nmbr}>{i + 1}</Typography>
                </div>
                <Typography className={classes.Videotitle}>{title}</Typography>
                <Typography>{description}</Typography>
              </div>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default StepsSection;
const useStyles = makeStyles((theme) => ({
  tray: {
    marginTop: '49px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  smTitle: {
    textAlign: 'center',
    marginBottom: '5px',
    fontWeight: '600',
    fontSize: '10px',
    background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '200% auto',
    animation: '$moveGradient 4s linear infinite',
  },
  title: {
    fontSize: 36,
    color: '#FFFFFFE5',
    // fontWeight: 600,
    letterSpacing: '0',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      textAlign: 'center',
      lineHeight: '28px',
      '& br': {
        display: 'none  ',
      },
    },
    '& span': {
      background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      backgroundSize: '200% auto',
      animation: '$moveGradient 4s linear infinite',
    },
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },

  StepCardBox: {
    display: 'none',
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  StepCardBox2: {
    display: 'flex',
    marginTop: '40px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  card: {
    width: 360,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '300px',
    },
  },
  img: {
    width: 360,
    [theme.breakpoints.down('md')]: {
      width: '300px',
    },
  },
  progressBar: {
    height: '4px',
    // background-color: #ddd;
    marginTop: '0px',
    width: '100%',
    backgroundColor: '#007aff',

    '&::-webkit-progress-bar': {
      backgroundColor: '#000',
      borderRadius: 0,
      // transition: 'width 1s ease-in-out',
    },

    '&::-webkit-progress-value': {
      backgroundColor: ' #007bff',
      borderRadius: 0,
      transition: 'width 0.1s ease-in',
    },
  },
  borderMain: {
    backgroundImage:
      'linear-gradient( red, orange, yellow, green, blue, indigo, violet)',
    width: 30,
    height: 30,
    borderRadius: '50%',
    padding: '3px',
    opacity: 0.7,
    marginTop: 20,
  },
  nmbr: {
    background: 'black',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Videotitle: {
    fontSize: '24px',
    // fontWeight: '800',
    letterSpacing: '0.6px',
    marginTop: 20,
  },
  detail: {
    marginTop: 10,
  },
}));
