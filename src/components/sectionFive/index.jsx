import { makeStyles, Typography } from "@material-ui/core";
import InvestmentsCard from "../InvestmentsCard ";
const SectionFive = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title}>
          Receive funds
          <br /> instantly.
          <br /> Manage rounds
          <br />
          effortlessly.
        </Typography>

        <div>
          <Typography className={classes.typo}>
            Access your realtime dashboard and get
            <br /> live notifications on your raise.
          </Typography>
        </div>
      </div>
      <div className={classes.img}>
        <div>
          <InvestmentsCard
            announcement="Packy McCormick just invested $10,000"
            time="now"
          />
        </div>
        <div>
          <InvestmentsCard
            announcement="Gaby Goldberg just invested $5,000 USDC"
            time="now"
          />
        </div>

        <div>
          <InvestmentsCard
            announcement="Seyi Taylor just invested $8,000"
            time="now"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
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
}));
