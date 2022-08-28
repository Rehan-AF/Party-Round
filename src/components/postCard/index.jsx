import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const PostCard = ({ profile, userName, title, message }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.userBox}>
        <div>
          <img src={profile} alt="profile" className={classes.profile} />
        </div>
        <div>
          <Typography className={classes.userName}>{userName}</Typography>
          <Typography className={classes.title}>{title}</Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div>
        <Typography className={classes.message}>{message}</Typography>
      </div>
    </div>
  );
};

export default PostCard;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "24px",
    border: "1px solid hsla(0,0%,100%,.06)",
    backgroundColor: "#222",
    boxShadow: "0 2px 10px 4px rgb(0 0 0 / 32%)",
    transition: ".4s cubic-bezier(.215, .61, .355, 1)",
    borderRadius: "1rem",
    maxWidth: "324px",

    "&:hover": {
      boxShadow: "0 4px 12px 6px rgb(0 0 0 / 32%)",
      transition: "translate(0,-4px)",
    },
  },
  profile: {
    width: "42px",
    borderRadius: "50%",
  },
  divider: {
    backgroundColor: "hsla(0,0%,100%,.1)",
    height: "1px",
    margin: "12px 0",
  },
  userBox: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  userName: {
    color: "#fff",
    fontSize: "1.2rem",
    lineHeight: " 1.1em",
    fontWeight: "600",
  },
  title: {
    color: "#9a9999",
    fontSize: "14px",
  },
  message: {
    color: "hsla(0,0%,100%,.8)",
    fontSize: "16px",
    margin: "20px 0 0 0",
  },
}));
