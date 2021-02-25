import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/menu/menu";
import About from "./components/menu/about/about";
import Settings from "./components/menu/settings/settings";
import Snake from "./components/game/snake";
import Music from "./components/music/music";
import ConfigProvider from "./components/config-file/config"
//import SoundButton from "./components/sound-button/sound-button"
import Header from "./components/header/header"

//const SettingContext = React.createContext()

const App = () => {
  return (
    <ConfigProvider>
    <Router>
      <Header/>
      {/* <SoundButton></SoundButton> */}
      <Route path="/" exact>
        <Menu ></Menu>
      </Route>
      <Route path="/Start" exact>
        <Snake></Snake>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/settings">
        <Settings/>
      </Route>
    </Router>
    </ConfigProvider>
  );
};

export default App;
