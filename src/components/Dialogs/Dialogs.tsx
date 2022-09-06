import React from 'react';
import classes from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { MessagesItem } from './MessagesItem/MessagesItem';
import { DialogsPageType } from '../../bll/dialogs-reducer';
import { DialogReduxForm } from './MassageForm/MessageFrom';

type DialogType = {
    dialogsPage: DialogsPageType,
    sendMessage: (text: string) => void,
    newMessageBodyDialog: (text: string) => void,
}

export type AddMassageFormType = {
    newMassageBody: string
}

export const Dialogs: React.FC<DialogType> = (
    { dialogsPage, sendMessage }
    ) => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={ d.name } key={ d.id } id={ d.id }/>);

    let messageElements = dialogsPage.messages.map(m => <MessagesItem message={ m.message } key={ m.id } id={ m.id }/>);

    const addNewMassage = (value: AddMassageFormType) => {
        sendMessage(value.newMassageBody);
    };

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ classes.massages }>
                { messageElements }
            </div>
            <DialogReduxForm onSubmit={ addNewMassage }/>
        </div>
    )
}