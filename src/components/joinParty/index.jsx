import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomBotton from "../buttons";
const JoinParty = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Join the Party</Typography>
      <CustomBotton children="Join Party" variant="secondary" />
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
  },
}));
