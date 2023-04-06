import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import video1 from '../../assets/videos/video1.webm';
import video2 from '../../assets/videos/video2.webm';
import video3 from '../../assets/videos/video3.webm';
// import StepCard from '../stepCard';
const StepsSection = () => {
  const classes = useStyles();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoData = [
    {
      title: 'Video 1',
      description: 'Description of Video 1',
      src: video1,
    },
    {
      title: 'Video 2',
      description: 'Description of Video 2',
      src: video2,
    },
    {
      title: 'Video 3',
      description: 'Description of Video 3',
      src: video3,
    },
  ];

  const onVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < videoData.length) {
        return nextIndex;
      } else {
        return 0;
      }
    });
  };
  return (
    <div>
      <Typography className={classes.title}>
        We give your receipt <span>superpowers</span>
      </Typography>
      {/* <div className={classes.StepCardBox}>
        <MobileCarousel item={1} />
      </div> */}
      <div className={classes.StepCardBox2}>
        {videoData.map((video, index) => (
          <div key={index} className="col-md-4">
            {/* <StepCard
              img={video.src}
              title={video.title}
              nmbr={index + 1}
              detail={video.description}
              playing={index === currentVideoIndex}
              onEnded={onVideoEnded}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 36,
    color: '#FFFFFFE5',
    fontWeight: 600,
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
}));
