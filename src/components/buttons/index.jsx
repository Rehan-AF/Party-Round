import { Button, withStyles } from "@material-ui/core";

const CustomBotton = withStyles(() => ({
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
}))(Button);
export default CustomBotton;
