import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";

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
    // marginLeft: theme.spacing(50),
    // marginRight: theme.spacing(50),
    //marginLeft: "35%",
    //marginRight: "35%",
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: 400,
      //   marginLeft: theme.spacing(50),
      // marginRight: theme.spacing(50),
    },
    marginTop: theme.spacing(30),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    paperArrow: {
      // padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      display: "flex",
      justifyContent: "center",
      //flexDirection: "column",
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
          {/* <Input
            value={""}
            //onChange={handleChange}
            name="textmask"
            id="formatted-text-mask-input"
            //inputComponent={TextMaskCustom}
          />
          <Button variant="contained" color="secondary">
            Submit
          </Button> */}
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
