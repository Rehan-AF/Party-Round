import { IconButton, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CustomBotton from "../buttons";
import SvgIcons from "../icons";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import SidebarNav from "../sideBar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/header/header.slicer";
import logo from "../../assets/logos/whiteLogo2.png";
const Header = () => {
  const { showSideBar } = useSelector((state) => state.Header);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSideBar(!showSideBar));
  };
  let styles = {};
  setTimeout(() => {
    if (!showSideBar) {
      return (styles = { display: "none" });
    }
  }, 1100);
  return (
    <div className={classes.container}>
      <div className={classes.drawer}>
        <IconButton onClick={handleClick} className={classes.drawerBtn}>
          {showSideBar !== true ? (
            <MenuIcon style={{ color: "white" }} />
          ) : (
            <CloseIcon style={{ color: "black" }} />
          )}
        </IconButton>

        <div>
          <SidebarNav show={showSideBar} />
        </div>
      </div>
      <div className={classes.sidebarBox}>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <div className={classes.navbarLinks}>
        <div className={classes.links}>
          <Link to="/" className={classes.reactLink}>
            <Typography className={classes.navLinks}>
              <SvgIcons drop={true} /> Drops
            </Typography>
          </Link>
          <Link to="/" className={classes.reactLink}>
            <Typography className={classes.navLinks}>
              <SvgIcons twitter={true} />
              Memes
            </Typography>
          </Link>
          <Link to="/" className={classes.reactLink}>
            <Typography className={classes.navLinks}>
              <SvgIcons career={true} />
              Career
            </Typography>
          </Link>
          <Link to="/" className={classes.reactLink}>
            <Typography className={classes.navLinks}>
              <HelpIcon fontSize="small" />
              FAQs
            </Typography>
          </Link>
        </div>
        <div className={classes.line}></div>
        <div className={classes.buttonBox}>
          <CustomBotton variant="text" children="Get started" />
        </div>
      </div>
    </div>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: " rgba( 0, 0, 0, 0.55 )",
    backdropFilter: "blur( 10px )",
    padding: "12px 65px",
    color: "#fff",
    height: "70px",
    position: "fixed",
    top: "0",
    width: "calc(100% - 131px)",
    zIndex: 100,

    // [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      padding: "12px 20px",
      width: "100vw",
      justifyContent: "flex-Start",
      gap: "30px",
    },
  },
  drawer: {
    display: "none",
    flexWrap: "noWrap",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  drawerBtn: {
    width: "35px",
    display: "flex",
    justifyContent: "flex-start",
    zIndex: 20,
  },
  sidebarBox: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  },
  logo: {
    color: "white",
    fontSize: "20px",
    width: "150px",
  },
  links: {
    display: "flex",
    gap: "40px",
  },
  navLinks: {
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  navbarLinks: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  line: {
    width: "1px",
    height: "36px",
    minHeight: "auto",
    marginRight: "24px",
    marginLeft: "12px",
    backgroundColor: "hsla(0,0%,100%,.2)",
  },
  reactLink: {
    textDecoration: "none",
    color: "white",
  },
}));
