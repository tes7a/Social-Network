import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {TypeDialog} from "../Dialogs";

export const DialogItem = (props : TypeDialog) => {
    let path = "/dialog/1" + props.id
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink className={classes.nav} to={path}>{props.name}</NavLink>
        </div>
    )
}
