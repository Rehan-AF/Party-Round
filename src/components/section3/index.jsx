import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import img1 from "../../assets/phone1.png";
import img2 from "../../assets/phone2.png";
const SectionThree = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title}>
          Your people.
          <br /> Your teams.
          <br /> Your cap table.
        </Typography>

        <div>
          <Typography className={classes.typo}>
            Unlike a crowdfunding platform, Party Round lets you <br /> invite
            and raise from people you already know
          </Typography>
        </div>
      </div>
      <div className={classes.img}>
        <img src={img1} alt="phone" className={classes.phoneOne} />
        <img src={img2} alt="phone" className={classes.phoneTwo} />
      </div>
    </div>
  );
};

export default SectionThree;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "120px",
    },
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
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      margin: "0 auto",
    },
  },
  phoneOne: {
    width: "224px",
    position: "relative",
    top: "-13px",
    left: "232px",
    [theme.breakpoints.down("md")]: {
      width: "190px",
      // right: "178px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      left: 0,
      // top: "244px",
    },
  },
  phoneTwo: {
    width: "224px",
    position: "relative",
    top: "98px",
    left: "204px",
    [theme.breakpoints.down("md")]: {
      width: "190px",
      // right: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      // top: "324px",
      left: -20,
    },
  },
}));
