import { makeStyles, Typography } from '@material-ui/core';
import ToggleCard from '../togglecard';
const SectionFour = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title}>
          Your business,
          <br />
          your tournament,
          <br /> on your terms - effortlessly <spna>with a toggle</spna>
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
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
    },
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
