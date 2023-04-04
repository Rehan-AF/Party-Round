import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PriceCard from '../priceCard';

// import IOSSwitch from '../Switch';

const Pricing = () => {
  const classes = useStyles();
  // const [state, setState] = useState({
  //   checkedB: false,
  // });
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };
  return (
    <div>
      <div className={classes.top}>
        <Typography className={classes.title}>
          Simple <span>pricing</span> that works at any scale.
        </Typography>
        <Typography className={classes.descrip}>
          Forget complex pricing structures, we believe in simple , transparent
          pricing that works for everyone, whether you’re big or small..
        </Typography>
        <Typography className={classes.subTitle}>
          Each plan includes a 7-day trial and you can cancel at any time.
        </Typography>
      </div>
      <div>
        <PriceCard />
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
    '& span': {
      background: 'linear-gradient(-45deg, #A2C754, #C75454, #9454C7, #54B2C7)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      backgroundSize: '200% auto',
      animation: '$moveGradient 4s linear infinite',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      marginBottom: '32px',
    },
  },
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
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
}));
