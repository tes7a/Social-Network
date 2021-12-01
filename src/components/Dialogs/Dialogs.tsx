import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import { DialogsPageType } from "../../Redux/dialogs-reducer";

type DialogType = {
    dialogsPage: DialogsPageType,
    sendMessage: (text: string) => void,
    newMessageBodyDialog: (text: string) => void,
}

export const Dialogs:React.FC<DialogType> = ({dialogsPage ,sendMessage,newMessageBodyDialog}) => {
    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = dialogsPage.messages.map(m => <MessagesItem message={m.message} id={m.id}/>)

    const newDialog = dialogsPage.newMessageBody;

    const onSendMessageClick = () => {
        sendMessage(newDialog);
        newMessageBodyDialog('');
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newMessageBodyDialog(e.currentTarget.value);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.massages}>
                {messageElements}
            </div>
            <div>
                <div><textarea value={newDialog} onChange={onChangeHandler}>x</textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>

        </div>
    )
}
