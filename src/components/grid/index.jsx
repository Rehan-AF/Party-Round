import { makeStyles } from "@material-ui/core";
import React from "react";
import Tile, { SimpleTile } from "../tile";

export const Grid = ({
  c1 = "transparent",
  c2 = "transparent",
  c3 = "transparent",
  c4 = "transparent",
  c5 = "transparent",
  c6 = "transparent",
  c7 = "transparent",
  c8 = "transparent",
  c9 = "transparent",
  c10 = "transparent",
  c11 = "transparent",
  c12 = "transparent",
  duration,
  opacity,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Tile color={c1} duration={duration} opacity={opacity} />
      <Tile color={c2} duration={duration} opacity={opacity} />
      <Tile color={c3} duration={duration} opacity={opacity} />
      <Tile color={c4} duration={duration} opacity={opacity} />
      <Tile color={c5} duration={duration} opacity={opacity} />
      <Tile color={c6} duration={duration} opacity={opacity} />
      <Tile color={c7} duration={duration} opacity={opacity} />
      <Tile color={c8} duration={duration} opacity={opacity} />
      <Tile color={c9} duration={duration} opacity={opacity} />
      <Tile color={c10} duration={duration} opacity={opacity} />
      <Tile color={c11} duration={duration} opacity={opacity} />
      <Tile color={c12} duration={duration} opacity={opacity} />
    </div>
  );
};
export const SmallGrid = ({
  c1 = "transparent",
  c2 = "transparent",
  c3 = "transparent",
  c4 = "transparent",
  duration,
  opacity,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.smallBox}>
      <Tile color={c1} duration={duration} opacity={opacity} />
      <Tile color={c2} duration={duration} opacity={opacity} />
      <Tile color={c3} duration={duration} opacity={opacity} />
      <Tile color={c4} duration={duration} opacity={opacity} />
    </div>
  );
};
export const SideBarGrid = ({
  c1 = "transparent",
  c2 = "transparent",
  c3 = "transparent",
  c4 = "transparent",
  duration,
  opacity,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.smallBox}>
      <SimpleTile color={c1} duration={duration} opacity={opacity} />
      <SimpleTile color={c2} duration={duration} opacity={opacity} />
      <SimpleTile color={c3} duration={duration} opacity={opacity} />
      <SimpleTile color={c4} duration={duration} opacity={opacity} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  box: {
    display: "grid",
    gridTemplateColumns: "repeat(12 ,1fr)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smallBox: {
    display: "grid",
    gridTemplateColumns: "repeat(4  ,1fr)",
    width: "100%",
  },
}));
