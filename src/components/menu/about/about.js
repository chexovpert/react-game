import React from 'react'
import {Link} from "react-router-dom"
import styleObj from "./about.module.scss"

export default () => {
    return (<div className={`${styleObj.about} ${styleObj.about_shown}`}>
        <div >Use arrow keys to control snake</div>
        <Link to="/">Menu</Link>
    </div>)
}