import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsPageType} from "../../Redux/State";

type DialogType = {
    state: DialogsPageType

}

export const Dialogs:React.FC<DialogType> = ({state}) => {
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <MessagesItem message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.massages}>
                {messageElements}
            </div>
        </div>
    )
}
