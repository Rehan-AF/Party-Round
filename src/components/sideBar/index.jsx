import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { Sidebar } from "../gridView/Grid";

const SidebarNav = () => {
  const classes = useStyles();
  const headerStyle = useSpring({
    config: { duration: 2000 },
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  return (
    <div className={classes.navBar}>
      <div className={classes.back}>
        <Sidebar />
      </div>
      <animated.div className={classes.navLinks} style={headerStyle}>
        <NavLink to="/home" className={classes.links}>
          Home
        </NavLink>
        <NavLink to="/home" className={classes.links}>
          Drops
        </NavLink>
        <NavLink to="/home" className={classes.links}>
          Memes
        </NavLink>
        <NavLink to="/home" className={classes.links}>
          Teams
        </NavLink>
        <NavLink to="/home" className={classes.links}>
          Career
        </NavLink>
        <NavLink to="/home" className={classes.links}>
          FAQs
        </NavLink>
      </animated.div>
    </div>
  );
};

export default SidebarNav;
const useStyles = makeStyles((theme) => ({
  navBar: {
    zIndex: 10,
    position: "absolute",
    right: 0,
    width: "100%",
    backgroundColor: "rgba(59, 59, 59, 0.54)",
    top: 0,
    height: "100vh",
  },
  navContent: {
    position: "absolute",
    zIndex: 20,
    top: 200,
  },
  back: {
    width: "100vw",
    height: "100vh",
  },
  navLinks: {
    position: "absolute",
    top: 150,
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    left: 25,
  },
  links: {
    fontSize: "2rem",
    textDecoration: "none",
    color: "#333",
    lineHeight: 1.5,
    fontWeight: "bold",
  },
}));
