import React from "react";
import { Link } from "react-router-dom";
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
    flexGrow: "1",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  paperArrow: {
    //textAlign: "center",
    //color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    //alignItems: "center",
  },
}));
export default () => {
  const classes = useStyles();
  const config = useConfig();
  config.trackHandler(MenuTheme);
  return (
    <Paper className={classes.paper} elevation={6}>
      <Grid
        //spacing={0}
        //direction="column"
        //alignItems="center"
        justify="center"
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <Paper elevation={6} className={classes.paperArrow}>
            <ArrowUpwardIcon />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={6} className={classes.paperArrow}>
            <ArrowBackIcon />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={6} className={classes.paperArrow}>
            <ArrowDownwardIcon />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={6} className={classes.paperArrow}>
            <ArrowForwardIcon />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6} className={classes.paperArrow}>
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
