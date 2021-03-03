import React from "react";
import { Link } from "react-router-dom";
import styleObj from "./menu.module.scss";
import Button from "@material-ui/core/Button";
import MenuTheme from "../../assets/music/menutheme.mp3";
import { useConfig } from "../config-file/config";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
  },
}));

function Menu() {
  const classes = useStyles();
  const config = useConfig();
  config.trackHandler(MenuTheme);
  const menuItems = [
    {
      id: "Start",
      title: "Start game",
      listener: () => {},
    },
    { id: "Settings", title: "Settings" },
    { id: "About", title: "About" },
    { id: "Records", title: "Records" },
  ];
  //console.log(styleObj)
  return (
    <Paper className={classes.paper}>
      {menuItems.map((item) => {
        return <MenuItem props={item} key={item.id} />;
      })}
    </Paper>
  );
}

function MenuItem({ props }) {
  return (
    <Link to={props.id}>
      <Button
        id={props.id}
        onClick={props.listener}
        variant="contained"
        color="secondary"
      >
        {props.title}
      </Button>
    </Link>
  );
}

export default Menu;
