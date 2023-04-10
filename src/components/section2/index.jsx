import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CheckListCard from '../checkListCard';
import Text from '../textfeild';

const SectionTwo = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.typo8}>
          <Text>“Almost 50% of global consumers</Text>
          <Text> want brands to innovate.”</Text>
        </Typography>
        <div className={classes.grayBox}>
          <Typography className={classes.typogray}>
            Digital Behaviours - Consumer Insights, GWI London
          </Typography>
        </div>
      </div>
      <div>
        <CheckListCard />
      </div>
    </div>
  );
};

export default SectionTwo;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '100px',

    [theme.breakpoints.down('md')]: {
      gap: '82px',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '50px',
      alignItems: 'center',
    },
  },
  typo8: {
    display: 'flex',
    flexDirection: 'column',
  },
  whiteBox: {
    marginTop: '20px',
  },
  typoWhite: {
    color: 'white',
    fontSize: '3rem',
    lineHeight: '1em',
    // fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
  },
  grayBox: {
    marginTop: '20px',
  },
  typogray: {
    color: '#49A1F2E5',
    lineHeight: '1em',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
      // fontWeight: '600',
    },
  },
}));
