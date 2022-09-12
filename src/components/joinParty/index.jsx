import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomBotton from "../buttons";
import { GridSix } from "../gridView";
import { SGridEight } from "../gridView/smallGrid";
const JoinParty = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <GridSix />
      </div>
      <div className={classes.gridSmall}>
        <SGridEight />
      </div>
      <div className={classes.subContainer}>
        <Typography className={classes.title}>Join the Party</Typography>
        <CustomBotton children="Join Party" variant="secondary" />
      </div>
    </div>
  );
};

export default JoinParty;
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3rem",
    lineHeight: "1",
    fontWeight: "600",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "44px",
    position: "relative",
  },
  grid: {
    width: "calc(100vw - 30px)",
    // width: "100vw",
    // position: "absolute",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  gridSmall: {
    width: "100vw",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  subContainer: {
    position: "absolute",
    bottom: "150px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
}));
