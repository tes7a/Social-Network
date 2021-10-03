import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MassgesItem} from "./MessagesItem/MessagesItem";

export type TypeDialog = {
    name: string
    id: number
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Kostya"},
        {id: 2, name: "Tanya"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Max"},
        {id: 5, name: "Rada"},
        {id: 6, name: "Ruslan"},
        {id: 7, name: "Karlitsa"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Gl"},
        {id: 5, message: "Thx"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = messages.map(m => <MassgesItem message={m.message} id={m.id}/>)

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
