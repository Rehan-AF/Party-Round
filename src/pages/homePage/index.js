import { makeStyles } from "@material-ui/core";
import React from "react";
import JoinParty from "../../components/joinParty";
import SectionTwo from "../../components/section2";
import SectionThree from "../../components/section3";
import SectionFour from "../../components/section4";
import SectionEight from "../../components/sectionEight";
import SectionFive from "../../components/sectionFive";
import Investors from "../../components/sectionNine";
import SectionRaise from "../../components/sectionRaise";
import SectionSeven from "../../components/sectionSeven";
import SectionSix from "../../components/sectionSix";
import background from "../../assets/background.svg";
import Footer from "../../components/footer";
const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <SectionRaise />
        <div className={classes.sectionGap}>
          <SectionTwo />
        </div>
        <div className={classes.sectionGap}>
          <SectionThree />
        </div>
        <div className={classes.sectionFourGap}>
          <SectionFour />
        </div>
        <div className={classes.sectionFiveGap}>
          <SectionFive />
        </div>
        <div className={classes.sectionGap}>
          <SectionSix />
        </div>
        <div className={classes.sectionGap}>
          <SectionSeven />
        </div>
        <div className={classes.sectionTwoGap}>
          <SectionEight />
        </div>
        <div className={classes.sectionTwoGap}>
          <Investors />
        </div>
        <div className={classes.sectionGap}>
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
    padding: "150px 100px 0 100px",
    [theme.breakpoints.down("md")]: {
      padding: "150px 50px 0 50px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "150px 20px 0 20px",
    },
  },
  sectionGap: {
    paddingTop: "12rem",
    // [theme.breakpoints.down("md")]: {
    //   paddingTop: "10rem",
    // },
  },
  sectionTwoGap: {
    paddingTop: "30rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20rem",
    },
  },
  sectionFourGap: {
    paddingTop: "21rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20rem",
    },
  },
  sectionFiveGap: {
    paddingTop: "29rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20rem",
    },
  },
  // sectionThreeGap: {
  //   paddingTop: "40rem",
  //   [theme.breakpoints.down("md")]: {
  //     paddingTop: "20rem",
  //   },
  // },
  // sectionSeven: {
  //   paddingTop: "40rem",
  //   [theme.breakpoints.down("md")]: {
  //     paddingTop: "20rem",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     paddingTop: "40rem",
  //   },
  // },
  img: {
    width: "100%",
    // paddingTop: "8rem",
    // [theme.breakpoints.down("sm")]: {
    //   paddingTop: "3rem",
    // },
  },
  // customGap: {
  //   paddingTop: "30rem",
  //   [theme.breakpoints.down("md")]: {
  //     paddingTop: "20rem",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     paddingTop: "35rem",
  //   },
  // },
}));
