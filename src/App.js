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
import Records from "./components/menu/records/records"
import Footer from "./components/menu/footer/footer"

//const SettingContext = React.createContext()

const App = () => {
  return (
    <ConfigProvider>
    <Router>
      <Header/>
      <Footer/>
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
      <Route path="/records">
        <Records/>
      </Route>
    </Router>
    </ConfigProvider>
  );
};

export default App;
