import React, {useState, useEffect} from "react"
import {useConfig} from "../../config-file/config"
import styleObj from "./settings.module.scss"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
//import VolumeDown from '@material-ui/icons/VolumeDown';
//import VolumeUp from '@material-ui/icons/VolumeUp';
import {Link} from "react-router-dom"

export default () => {
    const config = useConfig()
    //const [sound, setSound] = useState(config.volume*100)
    const handleSoundChange = (event, newValue) => {
        config.volumeHandler(newValue/100)
        config.volume=newValue/100
    }
    // useEffect(()=> {
    //     console.log(config)
    // })

    return (
        <div className={`${styleObj.settings} ${styleObj.settings_shown }`}>
            <div>
            <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          {/* <VolumeDown /> */}
        </Grid>
        <Grid item xs>
          <Slider style={{width: "300px"}} value={config.volume*100} onChange={handleSoundChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          {/* <VolumeUp /> */}
        </Grid>
      </Grid>
            </div>
            <div>Music</div>
            <div>Other settings</div>
            <Link to="/">Menu</Link>
        </div>
    )
}