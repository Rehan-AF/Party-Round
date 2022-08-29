import { Switch, withStyles } from "@material-ui/core";

export const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 62,
    height: 37,
    padding: 0,
    margin: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: 55,
      height: 30,
    },
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(26px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#36e3b5",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 34,
    height: 34,
    [theme.breakpoints.down("md")]: {
      width: 27,
      height: 27,
    },
  },
  track: {
    borderRadius: 50 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "#e9e9eb",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
