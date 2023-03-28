import { makeStyles } from '@material-ui/core';
import React from 'react';
import JoinParty from '../../components/joinParty';
import SectionTwo from '../../components/section2';
import SectionThree from '../../components/section3';
import SectionFour from '../../components/section4';
import SectionEight from '../../components/sectionEight';
import SectionFive from '../../components/sectionFive';
import Investors from '../../components/sectionNine';
import SectionRaise from '../../components/sectionRaise';
import SectionSeven from '../../components/sectionSeven';
import SectionSix from '../../components/sectionSix';
import background from '../../assets/background.svg';
import Footer from '../../components/footer';
import StepsSection from '../../components/steps';
const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <SectionRaise />
        <div style={{ paddingTop: '177px' }}>
          <StepsSection />
        </div>
        <div className={classes.sectionOneGap}>
          <SectionTwo />
        </div>
        <div className={classes.sectionThreeGap}>{/* <SectionThree /> */}</div>
        <div className={classes.sectionFourGap}>
          <SectionFour />
        </div>
        <div className={classes.sectionFiveGap}>
          <SectionFive />
        </div>
        <div className={classes.sectionGap}>
          <SectionSix />
        </div>
        <div className={classes.sectionSevenGap}>
          <SectionSeven />
        </div>
        <div className={classes.sectionEightGap}>
          <SectionEight />
        </div>
        <div className={classes.sectionNineGap}>
          <Investors />
        </div>
        <div className={classes.sectionGapLast}>
          <JoinParty />
        </div>
      </div>
      <img src={background} alt="background" className={classes.img} />
      <Footer />
    </div>
  );
};

export default HomePage;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0px 100px 0 100px',
    [theme.breakpoints.down('md')]: {
      padding: '150px 50px 0 50px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px 0 20px',
    },
    '&.MuiTypography-body1': {
      // fontFamily: '"Fahkwang", sans-serif!important',
    },
  },
  sectionGap: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '30rem',
    },
  },
  sectionOneGap: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '26rem',
    },
  },
  sectionThreeGap: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '20rem',
    },
  },
  sectionSevenGap: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '10rem',
    },
  },
  sectionTwoGap: {
    paddingTop: '30rem',
  },
  sectionEightGap: {
    paddingTop: '30rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '20rem',
    },
  },
  sectionNineGap: {
    paddingTop: '30rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '6rem',
    },
  },
  sectionFourGap: {
    paddingTop: '21rem',
  },
  sectionFiveGap: {
    paddingTop: '29rem',
  },

  img: {
    width: '100%',
  },
  sectionGapLast: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '30rem',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '10rem',
    },
  },
}));
