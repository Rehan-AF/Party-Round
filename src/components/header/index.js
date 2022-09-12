import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CustomBotton from "../buttons";
import SvgIcons from "../icons";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import SidebarNav from "../sideBar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
const Header = () => {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className={classes.container}>
      <div className={classes.drawer}>
        <Button onClick={handleClick} className={classes.drawerBtn}>
          {show !== true ? (
            <MenuIcon style={{ color: "white" }} />
          ) : (
            <CloseIcon style={{ color: "black" }} />
          )}
        </Button>

        {show && (
          <div>
            <SidebarNav />
          </div>
        )}
      </div>
      <div>
        <SvgIcons logo={true} className={classes.logo} width="160px" />
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
          <CustomBotton variant="root" children="Get started" />
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
      width: "100%",
      justifyContent: "flex-start",
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
  logo: {
    color: "white",
    fontSize: "20px",
    whidth: "20px",
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
