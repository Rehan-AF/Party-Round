import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ToggleCard from "../togglecard";
const SectionFour = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title}>
          Raise in cash
          <br /> or crypto
          <br /> or both
        </Typography>

        <div>
          <Typography className={classes.typo}>
            with USD and USDC supporte, you can raise
            <br /> from anyone,anywhere
          </Typography>
        </div>
      </div>
      <div className={classes.img}>
        <ToggleCard />
      </div>
    </div>
  );
};

export default SectionFour;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  title: {
    lineHeight: "1",
    fontSize: "4rem",
    fontWeight: "bold",
  },
  typo: {
    marginTop: "32px",
    fontSize: "1.2rem",
    lineHeight: "1.1",
    color: "hsla(0,0%,100%,.8)",
  },
}));
