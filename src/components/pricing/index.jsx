import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {
  MonthlySlider,
  AnnualSlider,
  MobileAnnualSlider,
  MobileMonthlySlider,
} from '../slider';
import IOSSwitch from '../Switch';

const Pricing = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedB: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  console.log(state.checkedB);
  return (
    <div>
      <div className={classes.top}>
        <Typography className={classes.title}>
          Simple pricing that works at any scale.
        </Typography>
        <Typography className={classes.descrip}>
          Forget complex pricing structures, we believe in simple , transparent
          pricing that works for everyone, whether you’re big or small..
        </Typography>
        <Typography className={classes.subTitle}>
          Each plan includes a 7-day trial and you can cancel at any time.
        </Typography>
      </div>
      <div className={classes.desktopSlider}>
        {state.checkedB ? (
          <AnnualSlider
            button={
              <IOSSwitch
                checked={state.checkedB}
                name="checkedB"
                onChange={handleChange}
              />
            }
          />
        ) : (
          <MonthlySlider
            button={
              <IOSSwitch
                checked={state.checkedB}
                name="checkedB"
                onChange={handleChange}
              />
            }
          />
        )}
      </div>
      <div className={classes.mobileSlider}>
        {state.checkedB ? (
          <MobileAnnualSlider
            button={
              <IOSSwitch
                checked={state.checkedB}
                name="checkedB"
                onChange={handleChange}
              />
            }
          />
        ) : (
          <MobileMonthlySlider
            button={
              <IOSSwitch
                checked={state.checkedB}
                name="checkedB"
                onChange={handleChange}
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default Pricing;

const useStyles = makeStyles((theme) => ({
  top: {
    textAlign: 'center',
  },
  title: {
    fontSize: '35px',
    fontWeight: '600',
    marginBottom: '70px',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      marginBottom: '32px',
    },
  },
  descrip: {
    fontSize: '24px',
    marginBottom: '50px',
    opacity: '90%',
    [theme.breakpoints.down('md')]: {
      marginBottom: '22px',
      fontSize: '17px',
    },
  },
  subTitle: {
    fontWeight: '600',
    fontSize: '24px',
    marginBottom: '44px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '22px',
      fontSize: '12px',
    },
  },
  desktopSlider: {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileSlider: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));
