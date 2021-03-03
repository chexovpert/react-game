import React from "react";
import { Link } from "react-router-dom";
import styleObj from "./about.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useConfig } from "../../config-file/config";
import MenuTheme from "../../../assets/music/menutheme.mp3";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
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
export default () => {
  const classes = useStyles();
  const config = useConfig();
  config.trackHandler(MenuTheme);
  return (
    <Paper className={classes.paper} elevation={6}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paperArrow} elevation={6}>
            <ArrowUpwardIcon />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paperArrow}>
            <ArrowBackIcon />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paperArrow}>
            <ArrowDownwardIcon className={classes.paperArrow} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paperArrow}>
            <ArrowForwardIcon />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperArrow} elevation={6}>
            SPACEBAR
          </Paper>
        </Grid>
      </Grid>
      <div>Use arrow keys to control snake and spacebar to pause the game</div>
      <Link to="/">
        <Button variant="contained" color="secondary">
          Menu
        </Button>
      </Link>
    </Paper>
  );
};
