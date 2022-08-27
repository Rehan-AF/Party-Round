import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SectionRaise from "../../components/sectionRaise";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <SectionRaise />
      </div>
    </div>
  );
};

export default HomePage;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "30px 180px",
  },
}));
