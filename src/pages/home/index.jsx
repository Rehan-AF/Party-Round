import { makeStyles } from "@material-ui/core";
import React from "react";
import {
  GridFive,
  GridFour,
  GridOne,
  GridSix,
  GridThree,
  Gridtwo,
} from "../../components/gridView";
import HomePage from "../homePage";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <GridOne />
        <Gridtwo />
        <GridThree />
        <GridFour />
        <GridFive />
      </div>
      <div className={classes.home}>
        <HomePage />
      </div>
    </div>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  home: {
    position: "absolute",
    zIndex: 2,
    top: 0,
    width: "100%",
  },
  grid: {
    marginTop: "10rem",
  },
}));
