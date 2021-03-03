import React, { useState, useEffect } from "react";
import { useConfig } from "../../config-file/config";
//import styleObj from "./settings.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
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
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
}));

export default () => {
  const classes = useStyles();
  const config = useConfig();
  config.trackHandler(MenuTheme);
  const handleSoundChange = (event, newValue) => {
    config.soundVolumeHandler(newValue / 100);
  };
  const handleMusicChange = (event, newValue) => {
    config.musicVolumeHandler(newValue / 100);
  };
  const handleMusicToggle = () => {
    config.musicHandler(!config.music);
  };
  const handleSoundToggle = () => {
    config.soundHandler(!config.sound);
  };
  const handleSpeed = (event) => {
    config.speedHandler(+event.target.value);
  };
  const handleMap = (event) => {
    config.setMap(+event.target.value);
  };
  const handleSkin = (event) => {
    config.skinHandler(+event.target.value);
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <div>
        <FormControlLabel
          control={<Switch size="large" />}
          checked={config.music}
          onChange={handleMusicToggle}
          label="Music on/off"
        />
        <Typography id="continuous-slider" gutterBottom>
          Music volume
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              style={{ width: "300px" }}
              value={config.musicVolume * 100}
              onChange={handleMusicChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        <FormControlLabel
          control={<Switch size="large" />}
          checked={config.sound}
          onChange={handleSoundToggle}
          label="Sounds on/off"
        />
        <Typography id="continuous-slider" gutterBottom>
          Sound volume
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              style={{ width: "300px" }}
              value={config.soundVolume * 100}
              onChange={handleSoundChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Background</FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            //defaultValue="top"
            value={config.map}
            onChange={handleMap}
          >
            <FormControlLabel
              value={0}
              control={<Radio color="primary" />}
              label="1"
              labelPlacement="top"
            />
            <FormControlLabel
              value={1}
              control={<Radio color="primary" />}
              label="2"
              labelPlacement="top"
            />
            <FormControlLabel
              value={2}
              control={<Radio color="primary" />}
              label="3"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Doom Guy skin</FormLabel>
          <RadioGroup
            value={config.skin}
            onChange={handleSkin}
            row
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value={0}
              control={<Radio color="primary" />}
              label="1"
              labelPlacement="top"
            />
            <FormControlLabel
              value={1}
              control={<Radio color="primary" />}
              label="2"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        {/* Other settings */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Difficulity</FormLabel>
          <RadioGroup
            value={config.speed}
            onChange={handleSpeed}
            row
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value={300}
              control={<Radio color="primary" />}
              label="Easy"
              labelPlacement="top"
            />
            <FormControlLabel
              value={200}
              control={<Radio color="primary" />}
              label="Medium"
              labelPlacement="top"
            />
            <FormControlLabel
              value={100}
              control={<Radio color="primary" />}
              label="Hard"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Link to="/">
        {" "}
        <Button variant="contained" color="secondary">
          Menu
        </Button>
      </Link>
    </Paper>
  );
};
