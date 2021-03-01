import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Menu from "./components/menu/menu";
import About from "./components/menu/about/about";
import Settings from "./components/menu/settings/settings";
import Snake from "./components/game/snake";
import Music from "./components/music/music";
import ConfigProvider from "./components/config-file/config";
//import SoundButton from "./components/sound-button/sound-button"
import Header from "./components/header/header";
import Records from "./components/menu/records/records";
import Footer from "./components/menu/footer/footer";
import { makeStyles } from "@material-ui/core/styles";
import Cover from "./components/music/cover.jpg";

//const SettingContext = React.createContext()
const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "space-between",
  },
  contentWrap: {
    flex: 1,
    backgroundImage: `url(${Cover})`,
    background: "center",
    backgroundRepeat: "norepeat",
  },
});

const App = () => {
  const styles = useStyles();
  return (
    <HashRouter basename="/">
      <ConfigProvider>
        <div className={styles.main}>
          <div className={styles.contentWrap}>
            <Router>
              <Header />

              {/* <SoundButton></SoundButton> */}
              <Route path="/" exact>
                <Menu></Menu>
              </Route>
              <Route path="/Start" exact>
                <Snake></Snake>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/records">
                <Records />
              </Route>
            </Router>
          </div>
          <Footer />
        </div>
      </ConfigProvider>
    </HashRouter>
  );
};

export default App;
