import { makeStyles, Typography } from '@material-ui/core';
import ToggleCard from '../togglecard';
const SectionFour = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title}>
          Start your tournament,
          <br />
          <span> effortlessly </span> with a toggle.
        </Typography>

        <div>
          <Typography className={classes.typo}>
            Customise every constraint - from minimum purchase value for each
            qualifying receipt, duration to prize pool.
          </Typography>
        </div>
      </div>
      <div className={classes.img}>
        <ToggleCard />
      </div>
    </div>
  );
};

export default SectionFour;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    gap: '23px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '60px',
    },
  },
  title: {
    fontSize: '35px',
    fontWeight: 'bold',
    lineHeight: '45px',
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
      lineHeight: '28px',
    },
  },

  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  typo: {
    marginTop: '32px',
    fontSize: '24px',
    lineHeight: '1.1',
    color: 'hsla(0,0%,100%,.8)',
    [theme.breakpoints.down('md')]: {
      fontSize: '21px',
    },
  },
}));
