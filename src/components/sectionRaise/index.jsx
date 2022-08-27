import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomBotton from "../buttons";
import img from "../../assets/phonr_main.png";
const SectionRaise = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title}>Let's raise.</Typography>
        <Typography className={classes.subTitle}>
          Start a round, invite investors, and automate everything from open to
          close.
        </Typography>
        <CustomBotton
          variant="primary"
          children="Get started"
          className={classes.btn}
        />
      </div>
      <div>
        <img src={img} alt="phone" className={classes.phone} />
      </div>
    </div>
  );
};

export default SectionRaise;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
  },
  title: {
    fontSize: "4rem",
    lineHeight: "1.5em",
    fontWeight: "800",
  },
  subTitle: {
    marginTop: "12px",
    fontSize: "2rem",
    color: "hsla(0,0%,100%,.7)",
  },
  phone: {
    width: "400px",
  },
  btn: {
    marginTop: "64px",
  },
}));
