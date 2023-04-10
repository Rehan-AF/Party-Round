import { makeStyles, Typography, Zoom } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import img from '../../assets/flowerIcon.png';
const InvestmentsCard = ({ time, announcement }) => {
  const classes = useStyles();
  const [cardvisible, setEntryIsVesible] = useState(false);
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setEntryIsVesible(entry.isIntersecting, 'entry');
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div ref={myRef}>
      <Zoom in={cardvisible} className={classes.container} timeout={500}>
        <div>
          <img src={img} alt="icon" className={classes.icon} />
          <div>
            <div className={classes.titleBox}>
              <Typography className={classes.title}>New investment</Typography>
              <Typography className={classes.time}>{time}</Typography>
            </div>
            <Typography className={classes.description}>
              {announcement}
            </Typography>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default InvestmentsCard;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    gap: '15px',
    color: 'black',
    border: '2px solid rgba(0,0,0,.06)',
    borderRadius: '1rem',
    backgroundColor: 'hsla(0,0%,100%,.8)',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.6) 39%,rgba(226,228,249,.8) 82%,rgba(207,214,241,.6))',
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
      height: '65px',
    },
    '&:hover': {
      transition: 'all 0.4s ease-in-out',
      boxShadow: '0 4px 12px 6px rgb(0 0 0 / 24%)',
      transform: 'scale(1.05)',
    },
  },
  icon: {
    width: '42px',
    height: '42px',
  },
  titleBox: {
    width: '350px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    // fontWeight: "bold",
    fontSize: '18px',
  },
  time: {
    color: 'gray',
  },
  description: {
    color: '#333',
  },
}));
