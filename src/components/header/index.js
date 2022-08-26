import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomBotton from "../buttons";
import SvgIcons from "../icons";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
    background: " rgba( 255, 255, 255, 0 )",
    backdropFilter: "blur( 3px )",
    padding: "12px 65px",
    color: "#fff",
    height: "70px",
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
