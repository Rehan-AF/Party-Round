import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Party Round</Typography>
      <div className={classes.linksBox}>
        <NavLink to="/" className={classes.links}>
          FAQs
        </NavLink>
        <NavLink to="/" className={classes.links}>
          Team
        </NavLink>
        <NavLink to="/" className={classes.links}>
          Privacy Policy
        </NavLink>
        <NavLink to="/" className={classes.links}>
          Terms of Use
        </NavLink>
        <Typography className={classes.links}>
          © 2022 Party Round Inc
        </Typography>
      </div>
      <Typography className={classes.typo}>
        Party Round is a financial technology company and is not a bank.
        <br /> Banking services provided by Blue Ridge Bank, N.A.; Member FDIC.
      </Typography>
    </div>
  );
};

export default Footer;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "150px 100px 60px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "150px 50px 60px 50px",
    },
  },
  linksBox: {
    display: "flex",
    gap: "40px",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      gap: 0,
      padding: "20px 40px 20px 0",
    },
  },
  links: {
    textDecoration: "none",
    fontSize: "14px",
    color: "#fff",
    padding: "20px 0",
    opacity: 0.8,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 20px 0",
    },
  },
  title: {
    fontSize: "1.7rem",
    fontWeight: "bold",
  },
  typo: {
    fontSize: "14px",
    lineHeight: "1.2",
    opacity: 0.8,
  },
}));
