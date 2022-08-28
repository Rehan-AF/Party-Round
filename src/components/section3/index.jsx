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
    position: "relative",
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
  img: {
    display: "flex",
  },
  phoneOne: {
    width: "224px",
    position: "absolute",
    top: "-180px",
    right: "160px",
  },
  phoneTwo: {
    width: "224px",
    position: "absolute",
    right: "-35px",
    top: "-66px",
  },
}));
