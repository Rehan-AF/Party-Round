import { Collapse, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Sidebar } from "../gridView/Grid";

const SidebarNav = () => {
  const classes = useStyles();
  const { showSideBar } = useSelector((state) => state.Header);
  return (
    <Collapse
      in={showSideBar}
      className={classes.navBar}
      timeout={{ appear: 1000, exit: 2400 }}
    >
      <div className={classes.back}>
        <Sidebar />
      </div>
      <div className={classes.navLinks}>
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
      </div>
    </Collapse>
  );
};

export default SidebarNav;
const useStyles = makeStyles((theme) => ({
  navBar: {
    zIndex: 10,
    position: "absolute",
    right: 0,
    width: "100%",
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
