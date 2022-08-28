import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import video from "../../assets/nftCard.mp4";
const SectionSeven = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
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
        <video src={video} loop muted autoPlay playsinline />
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
}));