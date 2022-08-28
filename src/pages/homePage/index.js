import { makeStyles } from "@material-ui/core";
import React from "react";
import SectionTwo from "../../components/section2";
import SectionThree from "../../components/section3";
import SectionFour from "../../components/section4";
import SectionFive from "../../components/sectionFive";
import SectionRaise from "../../components/sectionRaise";

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
      </div>
    </div>
  );
};

export default HomePage;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "150px 150px 60px 150px",
    [theme.breakpoints.down("md")]: {
      padding: "150px 100px 60px 100px",
    },
  },
  sectionGap: {
    paddingTop: "12rem",
  },
  sectionTwoGap: {
    paddingTop: "30rem",
  },
}));
