import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import video from "../../assets/nftCard.mp4";
const SectionSeven = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <Typography className={classes.title}>
          Your investors can mint
          <br />
          exclusive NFTs to verify
          <br /> their investments.
        </Typography>

        <div>
          <Typography className={classes.typo}>
            Turn your investors into advocates with raise-specific
            <br /> NFTs made for sharing.
          </Typography>
        </div>
      </div>
      <div className={classes.img}>
        <video
          className={classes.video}
          src={video}
          loop
          muted
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

export default SectionSeven;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  section: {
    width: "100%",
  },
  title: {
    lineHeight: "1",
    fontSize: "3.5rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  },
  typo: {
    marginTop: "32px",
    fontSize: "1.2rem",
    lineHeight: "1.1",
    color: "hsla(0,0%,100%,.8)",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  video: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "277px",
    },
  },
}));
