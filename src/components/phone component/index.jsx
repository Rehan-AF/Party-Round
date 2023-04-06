import React from 'react';
import { makeStyles } from '@material-ui/core';
import phone from '../../assets/videos/Phone.png';
import video from '../../assets/videos/Insert.mp4';

const PhoneComponent = () => {
  const classes = useStyles();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={classes.container}>
        <img
          src={phone}
          alt="phone"
          className={classes.phone}
          controls={false}
        />
        <video autoPlay controls={false} loop muted className={classes.video}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PhoneComponent;
const useStyles = makeStyles((theme) => ({
  container: {
    background: 'black',
    position: 'relative',
    display: 'flex',
  },
  phone: {
    width: '350px',

    [theme.breakpoints.down('sm')]: {
      width: '260px',
    },
  },
  video: {
    left: '52px',
    top: '8px',
    width: '238px',
    position: 'absolute',
    transform: 'rotateY(-13deg) rotate(8deg) rotateX(20deg) scaleY(1.079)',
    // transform:
    //   'perspective(180cm) rotateY(-9deg) rotate(8deg) rotateX(25deg) scaleY(1.11)',
    borderRadius: '35px',
    // perspective: '1000px',
    // perspective: '10200px',
    perspectiveOsrigin: ' 200px 300px',
    [theme.breakpoints.down('sm')]: {
      width: '260px',
    },
  },
}));
