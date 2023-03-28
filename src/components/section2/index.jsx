import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CheckListCard from '../checkListCard';
import Text from '../textfeild';

const SectionTwo = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Text className={classes.typo}>“Almost 50% of global consumers</Text>
        <Text className={classes.typo}> want brands to innovate.”</Text>

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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '50px',
      alignItems: 'center',
    },
  },
  typo: {
    fontSize: '45px',
    lineHeight: '1em',
    fontWeight: 'bold',
    color: '#cdcdcd',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },
  },
  whiteBox: {
    marginTop: '20px',
  },
  typoWhite: {
    color: 'white',
    fontSize: '3rem',
    lineHeight: '1em',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },
  },
  grayBox: {
    marginTop: '20px',
  },
  typogray: {
    color: '#49A1F2E5',
    lineHeight: '1em',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
}));
