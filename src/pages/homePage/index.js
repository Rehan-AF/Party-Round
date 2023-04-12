import { makeStyles } from '@material-ui/core';
import React from 'react';
import JoinParty from '../../components/joinParty';
import SectionTwo from '../../components/section2';
// import SectionThree from '../../components/section3';
import SectionFour from '../../components/section4';
import SectionEight from '../../components/sectionEight';
// import SectionFive from '../../components/sectionFive';
// import Investors from '../../components/sectionNine';
import SectionRaise from '../../components/sectionRaise';
// import SectionSeven from '../../components/sectionSeven';
// import SectionSix from '../../components/sectionSix';
import background from '../../assets/background.svg';
import Footer from '../../components/footer';
import StepsSection from '../../components/steps';
import InstaPost from '../../components/instaPost';
import Drops from '../../components/drops';
import Pricing from '../../components/pricing';
import Security from '../../components/securitySec';
import FAQ from '../../components/FAQ';
const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <SectionRaise />
        <div className={classes.sunContainer}>
          <div style={{ paddingTop: '177px' }}>
            <StepsSection />
          </div>
          <div className={classes.sectionOneGap}>
            <SectionTwo />
          </div>
          <div className={classes.sectionThreeGap}>
            <InstaPost />
            {/* <SectionThree /> */}
          </div>
          <div className={classes.sectionFourGap}>
            <SectionFour />
          </div>
          <div className={classes.sectionFiveGap}>
            <Drops />
            {/* <SectionFive /> */}
          </div>
          <div className={classes.sectionSevenGap}>
            {/* <SectionSeven /> */}
            <Pricing />
          </div>
          <div className={classes.sectionGap}>
            <Security />
          </div>
          <div className={classes.sectionEightGap}>
            <SectionEight />
          </div>
          <div className={classes.sectionNineGap}>
            <FAQ />
            {/* <Investors /> */}
          </div>
        </div>
        <div className={classes.sectionLast}>
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
      padding: '0 50px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px 0 15px',
    },

    '&.MuiTypography-body1': {
      // fontFamily: '"Fahkwang", sans-serif!important',
    },
  },
  sunContainer: {
    // padding: '0 70px',
    // [theme.breakpoints.up('xl')]: {
    //   padding: '0 345px',
    // },
    // [theme.breakpoints.down('md')]: {
    //   padding: '0 ',
    // },
  },
  sectionGap: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '12rem',
    },
  },
  sectionOneGap: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '8rem',
    },
  },
  sectionThreeGap: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '10rem',
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
      paddingTop: '12rem',
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
    [theme.breakpoints.down('md')]: {
      paddingTop: '10rem',
    },
  },
  sectionFiveGap: {
    paddingTop: '6rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '12rem',
    },
  },

  img: {
    width: '100%',
  },
  sectionGapLast: {
    paddingTop: '12rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0rem',
    },
  },
}));
