import React, { useContext, useState } from 'react'
const config ={
    soundOn: false,
    volume: 1,


}
const ConfigContext = React.createContext()

export const useConfig =() => {
    return useContext(ConfigContext)
}

export const ConfigProvider =({children}) => {
    const [volume, setVolume] = useState(config.volume)
    const [sound, setSound] = useState(config.soundOn)

    const volumeHandler = (volume) => {
        setVolume(volume);
        config.volume=volume;
    }
    const soundHandler = (sound) => {
        setSound(sound);
        config.soundOn=sound;
        console.log(config)
    }
    return (
    <ConfigContext.Provider value={{
        volume,
        volumeHandler,
        sound,
        soundHandler

    }}>
    {children}
    </ConfigContext.Provider>
    )}

export default ConfigProvider