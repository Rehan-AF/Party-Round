import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SvgIcons from "../icons";

const CheckListCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
  );
};

export default CheckListCard;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: "400px",
    backgroundColor: "#222",
    padding: "32px",
    border: "2px solid hsla(0,0%,100%,.06)",
    borderRadius: "1.3rem",
    boxShadow: "0 4px 12px 6px rgb(0 0 0 / 24%)",
  },
  subDiv: {
    display: "flex",
    gap: "20px",
    fontSize: "1.1rem",
  },
  icons: {
    width: "30px",
  },
  typo: {
    fontSize: "1.7rem",
  },
}));
