import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Section2 from "../../components/section2";
import SectionRaise from "../../components/sectionRaise";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <SectionRaise />
        <Section2 />
      </div>
    </div>
  );
};

export default HomePage;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "30px 250px",
  },
}));
