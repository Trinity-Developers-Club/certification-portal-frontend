import React from 'react';
import classes from "./landingPage.module.scss";
import logo from "../../Trinitylogo.png"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';


export default function Landing() {

    let styles = {
        height: "3rem",
        width: "3rem",
    }
    return (
        <div className={classes.main}>
            <div className={classes.loginDialog}>
                <img src={logo} alt="trinity logo" className={classes.logoClass} />
                <h4>Tsukuyomi</h4>
                <div className={classes.formField}>
                    <div className={classes.user}><span ><PersonOutlineIcon style={styles} /></span> <input type="text" placeholder="Username" /></div>
                    <div className={classes.pass}><span ><LockOpenIcon style={styles} /></span> <input type="text" placeholder="password" /></div>
                </div>
                <button className={classes.button}>Sign in</button>

            </div>
        </div>);
}