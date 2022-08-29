import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SvgIcons from "../icons";
import { IOSSwitch } from "../iosSwitch";

const ToggleCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.sub}>
          <SvgIcons USD={true} className={classes.icon} />
          <Typography className={classes.typo}>US Dollar</Typography>
        </div>
        <IOSSwitch />
      </div>
      <Divider />
      <div className={classes.main}>
        <div className={classes.sub}>
          <SvgIcons USDC={true} className={classes.icon} />
          <Typography className={classes.typo}>USDC</Typography>
        </div>
        <IOSSwitch />
      </div>
    </div>
  );
};

export default ToggleCard;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundImage:
      "linear-gradient(180deg,#fff,#fff 39%,rgba(226,228,249,.8) 82%,rgba(207,214,241,.6))",
    width: "400px",
    padding: "32px",
    border: "2px solid rgba(0,0,0,.06)",
    borderRadius: "1.3rem",
    boxShadow: "0 2px 10px 4px rgb(0 0 0 / 20%)",
    transform: "rotate(3deg)",
    transition: ".4s cubic-bezier(.215, .61, .355, 1)",
    "&:hover": {
      transform: "rotate(0deg)",
    },
    [theme.breakpoints.down("md")]: {
      width: "300px",
      padding: "15px",
    },
  },
  icon: {
    width: "35px",
    [theme.breakpoints.down("md")]: {
      width: "25px",
    },
  },
  typo: {
    color: "#000",
    fontSize: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sub: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      gap: "10px",
    },
  },
}));
