import { makeStyles, Typography } from "@material-ui/core";
import React, { useRef, useEffect, useState } from "react";
import CustomBotton from "../buttons";
import img from "../../assets/phonr_main.png";
import { useScrollDirection } from "../../hooks";
import clsx from "clsx";

const SectionRaise = () => {
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
        <Typography className={classes.title}>tick tock</Typography>
        <Typography className={classes.subTitle}>
          Its time to say no to quite hours supercharge your sales with 'magic
          hour'
        </Typography>

        <CustomBotton
          variant="outlined"
          children="Get started"
          className={classes.btn}
        />
      </div>
      <div>
        <img
          src={img}
          alt="phone"
          className={clsx(classes.phone, {
            [classes.scrollDownAnimation]: entryIsVisible.isScrolledDown,
            [classes.scrollUpAnimation]: entryIsVisible.isScrolledUp,
          })}
          ref={myRef}
        />
      </div>
    </div>
  );
};

export default SectionRaise;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  title: {
    fontSize: "4rem",
    lineHeight: "1.5em",
    fontWeight: "800",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  },
  subTitle: {
    marginTop: "12px",
    fontSize: "2rem",
    color: "hsla(0,0%,100%,.7)",
    lineHeight: "1em",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
  },
  phone: {
    width: "350px",

    [theme.breakpoints.down("sm")]: {
      width: "270px",
    },
  },
  scrollDownAnimation: {
    transform: "translate(-40px,40px) rotate(-20deg)",
    transition: "0.5s",
  },
  scrollUpAnimation: {
    transform: "translate(40px,-40px)",
    transition: "0.5s",
  },
  btn: {
    marginTop: "64px",
  },
}));
