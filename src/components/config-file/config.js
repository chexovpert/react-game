import React, { useContext, useState } from "react";
const config = {
  soundOn: false,
  soundVolume: 1,
  musicOn: false,
  musicVolume: 1,
  arena: 0,
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

  const localStorageHandler = (param) => {
    let localConfig = JSON.parse(localStorage.config);
    //localConfig[param];
  };

  const soundVolumeHandler = (soundVolume) => {
    setSoundVolume(soundVolume);
    //config.soundVolume = soundVolume;
  };

  const musicVolumeHandler = (musicVolume) => {
    setMusicVolume(musicVolume);
    //config.musicVolume = musicVolume;
  };
  const soundHandler = (sound) => {
    setSound(sound);
    //config.soundOn = sound;
  };
  const musicHandler = (music) => {
    setMusic(music);
    //config.musicOn = music;
  };
  const trackHandler = (track) => {
    setTrack(track);
    //config.musicOn = music;
  };
  const speedHandler = (speed) => {
    setSpeed(speed);
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
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
