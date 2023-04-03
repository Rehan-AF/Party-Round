import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';

const StepCard = ({ img, nmbr, title, detail, onEnded, playing }) => {
  const classes = useStyles();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (playing) {
      video.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    } else {
      video.pause();
    }

    return () => {
      video.pause();
    };
  }, [playing]);

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('ended', onEnded);
    };
  }, [onEnded]);
  return (
    <div className={classes.card}>
      <vidoe
        className={classes.img}
        src={img}
        // autoPlay
        ref={videoRef}
        controls
        alt="image_failed_to_load"
      />
      <div className={classes.borderMain}>
        <Typography className={classes.nmbr}>{nmbr}</Typography>
      </div>
      <Typography className={classes.title}>{title}</Typography>
      <Typography>{detail}</Typography>
    </div>
  );
};

export default StepCard;
const useStyles = makeStyles((theme) => ({
  card: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '300px',
    },
  },
  img: {
    width: 400,
    [theme.breakpoints.down('md')]: {
      width: '300px',
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
  title: {
    fontSize: '24px',
    fontWeight: '800',
    letterSpacing: '0.6px',
    marginTop: 20,
  },
  detail: {
    marginTop: 10,
  },
}));
