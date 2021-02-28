import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
//import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SoundButton from "../sound-button/sound-button";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //   flexGrow: 1,
  },
}));

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/">
              <MenuItem onClick={handleClose}>Main menu</MenuItem>
            </Link>
            <Link to="/Start">
              <MenuItem onClick={handleClose}>Start game</MenuItem>
            </Link>
            <Link to="/Settings">
              <MenuItem onClick={handleClose}>Settings</MenuItem>
            </Link>
            <Link to="/About">
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>
            <Link to="/Records">
              <MenuItem onClick={handleClose}>Records</MenuItem>
            </Link>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
          <SoundButton />
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
    // <div>
    //   <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    //     Open Menu
    //   </Button>

    // </div>
  );
}
