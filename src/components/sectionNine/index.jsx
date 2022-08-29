import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SvgIcons from "../icons";
import abstractLogo from "../../assets/logos/abstract.png";
import shrug from "../../assets/logos/shrug.png";
import sss from "../../assets/logos/sss.png";

const Investors = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        Backed by incredible founders, investors,
        <br /> and operators.
      </Typography>
      <div className={classes.investorsBox}>
        <SvgIcons
          andreessen={true}
          width="164px"
          className={classes.iconsBig}
        />
        <img
          src={abstractLogo}
          alt="logo"
          width="164px"
          className={classes.iconsBig}
        />
        <img
          src={shrug}
          alt="logo"
          width="164px"
          className={classes.iconsBig}
        />
        <img
          src={sss}
          alt="logo"
          width="100px"
          height="100px"
          className={classes.iconsSmall}
        />
        <SvgIcons ventures={true} width="164px" className={classes.iconsBig} />
      </div>
      <div className={classes.linksBox}>
        <Typography>Emilie Choi</Typography>
        <Typography>Trevor McFedries</Typography>
        <Typography>Karim Atiyeh</Typography>
        <Typography>Packy McCormick</Typography>
        <Typography>Joe Albanese</Typography>
        <Typography>Andy Kleinman</Typography>
        <Typography>Brian Nichols</Typography>
        <Typography>Austin Rief</Typography>
        <Typography>Ian Lee</Typography>
        <Typography>Nu Dao</Typography>
        <Typography>Nik Sharma</Typography>
      </div>
    </div>
  );
};

export default Investors;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "64px",
  },
  title: {
    fontSize: "1.2rem",
    textAlign: "center",
  },
  investorsBox: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    [theme.breakpoints.down("sm")]: {
      gap: "30px",
      flexWrap: "wrap",
    },
  },
  linksBox: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "60px",
    width: "960px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  iconsBig: {
    width: "164px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  iconsSmall: {
    width: "100px",
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "80px",
    },
  },
}));
