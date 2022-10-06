import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const Text = ({ children }) => {
  const classes = useStyles();
  const [cardvisible, setEntryIsVesible] = useState(false);
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setEntryIsVesible(entry.isIntersecting, "entry");
      },
      {
        rootMargin: "-120px",
      }
    );
    observer.observe(myRef.current);
  }, []);

  return (
    <Typography
      className={clsx(classes.typo, {
        [classes.scrollUpAnimationOne]: cardvisible === false,
        [classes.scrollDownAnimationOne]: cardvisible === true,
      })}
      ref={myRef}
    >
      {children}
    </Typography>
  );
};

export default Text;
const useStyles = makeStyles((theme) => ({
  typo: {
    fontSize: "3rem",
    lineHeight: "1em",
    fontWeight: "bold",
    color: "#cdcdcd",

    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
  },
  scrollUpAnimationOne: {
    color: "#4d4d4d",
    textDecoration: "line-through",
    textDecorationColor: "black",
    transition: "1000ms",
  },
  scrollDownAnimationOne: {
    transition: "1000ms",
    textDecoration: "none",
  },
}));
