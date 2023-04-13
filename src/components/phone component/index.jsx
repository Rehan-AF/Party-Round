import React from 'react';
import { makeStyles } from '@material-ui/core';
import phone from '../../assets/videos/Phone.png';
import video from '../../assets/videos/Insert.mp4';

const PhoneComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <img
          src={phone}
          alt="phone"
          className={classes.phone}
          controls={false}
        />
        <video
          autoPlay
          controls={false}
          muted
          loop
          playsinline
          className={classes.video}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PhoneComponent;
const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
  },
  phone: {
    width: '350px',

    [theme.breakpoints.down('md')]: {
      width: '260px',
    },
  },
  video: {
    top: '3px',
    left: '50px',
    width: '244px',
    position: 'absolute',
    clipPath:
      'polygon(70% 0, 80% 0%, 100% 0, 100% 100%, 80% 100%, 0 100%, 0% 80%, 0 1.5%)',
    transform:
      'perspective(600cm) rotateY(-12deg) rotate(8deg) rotateX(20deg) scaleY(1.05)',
    borderRadius: '46px 35px 35px 35px',
    [theme.breakpoints.down('md')]: {
      width: '182px',
      top: '2px',
      left: '37px',
      //   position: 'absolute',
      //   clipPath:
      //     'polygon(70% 0, 80% 0%, 100% 0, 100% 100%, 80% 100%, 0 100%, 0% 80%, 0 1.5%)',
      //   transform:
      //     ' perspective(600cm) rotateY(-12deg) rotate(8deg) rotateX(20deg) scaleY(1.05)',
      borderRadius: '35px 24px 26px 26px',
    },
  },
}));
