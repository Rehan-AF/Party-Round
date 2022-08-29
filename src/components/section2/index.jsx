import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CheckListCard from "../checkListCard";

const SectionTwo = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.typo}>Start a round </Typography>
        <Typography className={classes.typo}>Set terms</Typography>
        <Typography className={classes.typo}>Draft legal docs</Typography>
        <Typography className={classes.typo}>Upload to DocuSign</Typography>
        <Typography className={classes.typo}>Collect signatures</Typography>
        <Typography className={classes.typo}>
          Email wire instructions
        </Typography>
        <Typography className={classes.typo}>Confirm funds</Typography>
        <Typography className={classes.typo}>Track investors</Typography>
        <div className={classes.whiteBox}>
          <Typography className={classes.typoWhite}>Automate all of</Typography>
          <Typography className={classes.typoWhite}>
            it on Party Round.
          </Typography>
        </div>
        <div className={classes.grayBox}>
          <Typography className={classes.typogray}>
            Generate SAFEs, collect signatures, and
          </Typography>
          <Typography className={classes.typogray}>
            receive funds, automatically.
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
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "100px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "50px",
      alignItems: "flex-start",
    },
  },
  typo: {
    fontSize: "3rem",
    lineHeight: "1em",
    fontWeight: "bold",
    color: "#cdcdcd",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
  },
  whiteBox: {
    marginTop: "20px",
  },
  typoWhite: {
    color: "white",
    fontSize: "3rem",
    lineHeight: "1em",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
  },
  grayBox: {
    marginTop: "20px",
  },
  typogray: {
    color: "#cdcdcd",
    lineHeight: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
}));
