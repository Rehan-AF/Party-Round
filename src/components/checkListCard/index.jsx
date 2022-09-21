import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SvgIcons from "../icons";

const CheckListCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.divOne}></div>
      <div className={classes.divtwo}>
        <div className={classes.subDiv}>
          <SvgIcons check={true} className={classes.icons} />
          <Typography className={classes.typo}>Generating SAFE</Typography>
        </div>
        <div className={classes.subDiv}>
          <SvgIcons check={true} className={classes.icons} />
          <Typography className={classes.typo}>Setting up round</Typography>
        </div>
        <div className={classes.subDiv}>
          <SvgIcons check={true} className={classes.icons} />
          <Typography className={classes.typo}>Round started</Typography>
        </div>
      </div>
    </div>
  );
};

export default CheckListCard;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "400px",
    backgroundColor: "#222",
    padding: "0 32px 15px 32px",
    border: "2px solid hsla(0,0%,100%,.06)",
    borderRadius: "1.3rem",
    boxShadow: "0 4px 12px 6px rgb(0 0 0 / 24%)",
    position: "relative",
    height: "227px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "270px",
    },
  },
  subDiv: {
    display: "flex",
    gap: "20px",
    fontSize: "1.1rem",
    backgroundColor: "#222",
    padding: "2px",
  },
  icons: {
    width: "30px",
    [theme.breakpoints.down("md")]: {
      width: "25px",
    },
  },
  typo: {
    fontSize: "1.7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
  },
  divOne: {
    padding: "15px",
    borderRight: "2px solid hsla(0,0%,100%,.06)",
  },
  divtwo: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "17px",
    position: "absolute",
    left: "30px",
    [theme.breakpoints.down("md")]: {
      left: "32px",
    },
  },
}));
