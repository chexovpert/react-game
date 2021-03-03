import React, { useContext, useState } from "react";
const config = {
  soundOn: false,
  soundVolume: 1,
  musicOn: false,
  musicVolume: 1,
  arena: 0,
  skin: 0,
  SPEED: 100,
};
const ConfigContext = React.createContext();

export const useConfig = () => {
  return useContext(ConfigContext);
};

export const ConfigProvider = ({ children }) => {
  const [soundVolume, setSoundVolume] = useState(config.soundVolume);
  const [musicVolume, setMusicVolume] = useState(config.musicVolume);
  const [sound, setSound] = useState(config.soundOn);
  const [music, setMusic] = useState(config.musicOn);
  const [track, setTrack] = useState(null);
  const [speed, setSpeed] = useState(config.SPEED);
  const [map, setMap] = useState(config.arena);
  const [skin, setSkin] = useState(config.skin);

  const soundVolumeHandler = (soundVolume) => {
    setSoundVolume(soundVolume);
  };

  const musicVolumeHandler = (musicVolume) => {
    setMusicVolume(musicVolume);
  };
  const soundHandler = (sound) => {
    setSound(sound);
  };
  const musicHandler = (music) => {
    setMusic(music);
  };
  const trackHandler = (track) => {
    setTrack(track);
  };
  const speedHandler = (speed) => {
    setSpeed(speed);
  };
  const mapHandler = (number) => {
    setMap(number);
  };
  const skinHandler = (skin) => {
    setSkin(skin);
  };
  return (
    <ConfigContext.Provider
      value={{
        soundVolume,
        soundVolumeHandler,
        musicVolume,
        musicVolumeHandler,
        sound,
        soundHandler,
        music,
        musicHandler,
        track,
        trackHandler,
        speed,
        speedHandler,
        map,
        setMap,
        skin,
        skinHandler,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
