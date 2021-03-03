import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    position: "fixed",
    top: "0px",
    width: "auto",
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: 400,
    },
    marginTop: theme.spacing(30),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    paperArrow: {
      textAlign: "center",
      color: theme.palette.text.secondary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
export default (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: "(1  )    -    ",
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper} elevation={6}>
        <div>
          <p>Game Over</p>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <p htmlFor="formatted-text-mask-input">
            Score: {props.score}, Date: {props.date.toLocaleDateString()}, Time:
            {props.date.getHours()}:{props.date.getMinutes()}
          </p>
        </form>

        <Button
          variant="contained"
          color="secondary"
          onClick={props.startHandler}
        >
          Start again
        </Button>
        <Link to="/Records">
          <Button variant="contained" color="secondary">
            Records
          </Button>
        </Link>
        <Link to="/">
          <Button variant="contained" color="secondary">
            Menu
          </Button>
        </Link>
      </Paper>
    </div>
  );
};
