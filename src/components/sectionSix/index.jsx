import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import phoneOne from "../../assets/tiltPhone1.png";
import phoneTwo from "../../assets/tiltPhone2.png";
const SectionSix = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.subDiv}>
        <Typography className={classes.title}>
          Invited with a text,
          <br />
          invested with a tap.
        </Typography>

        <div>
          <Typography className={classes.typo}>
            Once privately invited, your investors can view your
            <br /> round, connect their bank or wallet, and
            <br /> commit funds in seconds.
          </Typography>
        </div>
      </div>
      <div className={classes.img}>
        <img src={phoneOne} alt="Phone" className={classes.phoneOne} />
        <img src={phoneTwo} alt="Phone" className={classes.phoneTwo} />
      </div>
    </div>
  );
};

export default SectionSix;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "180px",
      alignItems: "center",
    },
  },
  subDiv: {
    marginTop: "5rem",
  },
  title: {
    lineHeight: "1",
    fontSize: "4rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  },
  typo: {
    marginTop: "32px",
    fontSize: "1.2rem",
    lineHeight: "1.1",
    color: "hsla(0,0%,100%,.8)",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  img: {
    display: "flex",
    margin: "0 auto",
  },
  phoneOne: {
    width: "324px",
    position: "relative",
    left: "274px",
    top: "-80px",
    [theme.breakpoints.down("md")]: {
      width: "224px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "167px",
      left: "32%",
      top: "-100px",
    },
  },
  phoneTwo: {
    width: "324px",
    zIndex: 2,
    position: "relative",
    top: "78px",
    left: "-246px",
    [theme.breakpoints.down("md")]: {
      width: "224px",
      // top: "49px",
      // left: "152px",
    },
    [theme.breakpoints.down("md")]: {
      width: "167px ",
      top: 0,
      left: -157,
    },
  },
}));
