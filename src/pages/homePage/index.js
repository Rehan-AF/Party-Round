import { makeStyles } from "@material-ui/core";
import React from "react";
import SectionTwo from "../../components/section2";
import SectionThree from "../../components/section3";
import SectionFour from "../../components/section4";
import SectionEight from "../../components/sectionEight";
import SectionFive from "../../components/sectionFive";
import SectionRaise from "../../components/sectionRaise";
import SectionSeven from "../../components/sectionSeven";
import SectionSix from "../../components/sectionSix";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <SectionRaise />
        <div className={classes.sectionGap}>
          <SectionTwo />
        </div>
        <div className={classes.sectionTwoGap}>
          <SectionThree />
        </div>
        <div className={classes.sectionTwoGap}>
          <SectionFour />
        </div>
        <div className={classes.sectionTwoGap}>
          <SectionFive />
        </div>
        <div className={classes.sectionGap}>
          <SectionSix />
        </div>
        <div className={classes.sectionThreeGap}>
          <SectionSeven />
        </div>
        <div className={classes.sectionTwoGap}>
          <SectionEight />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "150px 100px 60px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "150px 50px 60px 50px",
    },
  },
  sectionGap: {
    paddingTop: "12rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "10rem",
    },
  },
  sectionTwoGap: {
    paddingTop: "30rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20rem",
    },
  },
  sectionThreeGap: {
    paddingTop: "40rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20rem",
    },
  },
}));
