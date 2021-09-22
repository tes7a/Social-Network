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

    let dialogData = [
        {id: 1, name: "Kostya"},
        {id: 2, name: "Tanya"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Max"},
        {id: 5, name: "Rada"},
        {id: 6, name: "Ruslan"},
        {id: 7, name: "Karlitsa"}
    ]

    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Gl"},
        {id: 5, message: "Thx"}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogItem name={dialogData[5].name} id={dialogData[5].id}/>
                <DialogItem name={dialogData[6].name} id={dialogData[6].id}/>
            </div>
            <div className={classes.massages}>
                <MassgesItem message={messageData[0].message} id={messageData[0].id}/>
                <MassgesItem message={messageData[1].message} id={messageData[1].id}/>
                <MassgesItem message={messageData[2].message} id={messageData[2].id}/>
                <MassgesItem message={messageData[3].message} id={messageData[3].id}/>
                <MassgesItem message={messageData[4].message} id={messageData[4].id}/>
            </div>
        </div>
    )
}
