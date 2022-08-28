import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import InvestmentsCard from "../InvestmentsCard ";
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
            <br />
            commit funds in seconds.
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
    position: "relative",
    justifyContent: "space-between",
  },
  subDiv: {
    marginTop: "5rem",
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
  img: {
    display: "flex",
  },
  phoneOne: {
    width: "324px",
    position: "absolute",
    left: "281px",
    top: "-80px",
  },
  phoneTwo: {
    width: "324px",
    zIndex: 2,
    position: "absolute",
    top: "78px",
    left: "89px",
  },
}));