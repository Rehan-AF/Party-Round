import { Divider, makeStyles, Typography } from '@material-ui/core';
import { IOSSwitch } from '../iosSwitch';
import joystick from '../../assets/logos/image12.png';
import gift from '../../assets/logos/image13.png';
const ToggleCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.sub}>
          <img src={joystick} alt="" />
          <Typography className={classes.typo}>Start Tournament</Typography>
        </div>
        <IOSSwitch />
      </div>
      <Divider />
      <div className={classes.main}>
        <div className={classes.sub}>
          <img src={gift} alt="" />
          <Typography className={classes.typo}>Instant Win</Typography>
        </div>
        <IOSSwitch />
      </div>
    </div>
  );
};

export default ToggleCard;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '400px',
    backgroundColor: 'white',
    padding: '32px',
    border: '2px solid rgba(0,0,0,.06)',
    borderRadius: '1.3rem',
    boxShadow: '0 2px 10px 4px rgb(0 0 0 / 20%)',
    transform: 'rotate(3deg)',
    transition: '.4s cubic-bezier(.215, .61, .355, 1)',
    '&:hover': {
      transform: 'rotate(0deg)',
    },
    [theme.breakpoints.down('md')]: {
      width: '300px',
      padding: '15px',
    },
  },
  icon: {
    width: '35px',
    [theme.breakpoints.down('md')]: {
      width: '25px',
    },
  },
  typo: {
    color: '#000',
    fontSize: '30px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sub: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      gap: '10px',
    },
  },
}));
