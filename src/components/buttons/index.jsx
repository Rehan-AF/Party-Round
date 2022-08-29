import { Button, withStyles } from "@material-ui/core";

const CustomBotton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "red",
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  primary: {
    padding: "16px 32px",
    backgroundImage: "linear-gradient(90deg,#ff002e,#ff4667)",
    fontSize: "1rem",
    borderRadius: "0.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      padding: "10px 16px",
    },
  },
}))(Button);
export default CustomBotton;
