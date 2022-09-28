import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/phone1.png";
import img2 from "../../assets/phone2.png";
import { useScrollDirection } from "../../hooks";
const SectionThree = () => {
  const classes = useStyles();
  const boxRef = useRef(null);
  const myRef = useRef();

  const scrollDirection = useScrollDirection(myRef);
  const [entryIsVisible, setEntryIsVesible] = useState({
    isScrolledUp: false,
    isScrolledDown: false,
  });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (scrollDirection === "up") {
        setEntryIsVesible((prev) => ({
          ...prev,
          isScrolledDown: false,
          isScrolledUp: entry.isIntersecting,
        }));
      } else if (scrollDirection === "down") {
        setEntryIsVesible((prev) => ({
          ...prev,
          isScrolledDown: entry.isIntersecting,
          isScrolledUp: false,
        }));
      } else {
        setEntryIsVesible((prev) => ({
          ...prev,
          isScrolledDown: false,
          isScrolledUp: false,
        }));
      }
    });
    observer.observe(myRef.current);
  }, [scrollDirection]);
  return (
    <div className={classes.container} ref={boxRef}>
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
        <img
          src={img1}
          alt="phone"
          ref={myRef}
          className={clsx(classes.phoneOne, {
            [classes.scrollDownAnimationOne]: entryIsVisible.isScrolledDown,
            [classes.scrollUpAnimationOne]: entryIsVisible.isScrolledUp,
          })}
        />
        <img
          src={img2}
          alt="phone"
          ref={myRef}
          className={clsx(classes.phoneTwo, {
            [classes.scrollDownAnimationTwo]: entryIsVisible.isScrolledDown,
            [classes.scrollUpAnimationTwo]: entryIsVisible.isScrolledUp,
          })}
        />
      </div>
    </div>
  );
};

export default SectionThree;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "120px",
    },
  },
  title: {
    lineHeight: "1",
    fontSize: "4rem",
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
  img: {
    display: "flex",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      margin: "0 auto",
    },
  },
  phoneOne: {
    width: "224px",
    position: "relative",
    top: "-13px",
    left: "232px",
    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      left: 0,
    },
  },
  phoneTwo: {
    width: "224px",
    position: "relative",
    top: "98px",
    left: "204px",
    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      left: -20,
    },
  },
  scrollDownAnimationOne: {
    animation: `$DownOne 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
  },
  "@keyframes DownOne": {
    "0%": {
      transform: " translate(0rem, 0rem)",
    },

    "100%": {
      transform: " translate(0rem , 2rem)",
    },
  },
  scrollUpAnimationOne: {
    animation: `$UpOne 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
  },
  "@keyframes UpOne": {
    "0%": {
      transform: " translate(0rem, 2rem)",
    },

    "100%": {
      transform: " translate(0rem , 0rem)",
    },
  },
  scrollDownAnimationTwo: {
    animation: `$DownTwo 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
  },
  "@keyframes DownTwo": {
    "0%": {
      transform: " translate(0rem, 0rem)",
    },

    "100%": {
      transform: " translate(0rem , -2rem)",
    },
  },
  scrollUpAnimationTwo: {
    animation: `$UpTwo 1000ms  ${theme.transitions.easing.easeInOut} 1 normal forwards`,
  },
  "@keyframes UpTwo": {
    "0%": {
      transform: " translate(0rem, -2rem)",
    },

    "100%": {
      transform: " translate(0rem , 0rem)",
    },
  },
}));
