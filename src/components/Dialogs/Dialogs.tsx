import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsPageType} from "../../Redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogType = {
    dialogsPage: DialogsPageType,
    sendMessage: (text: string) => void,
    newMessageBodyDialog: (text: string) => void,
}

export const Dialogs: React.FC<DialogType> = ({dialogsPage, sendMessage, newMessageBodyDialog,}) => {
    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = dialogsPage.messages.map(m => <MessagesItem message={m.message} key={m.id} id={m.id}/>)

    const addNewMassage = (value: AddMassageFormType) => {
        sendMessage(value.newMassageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.massages}>
                {messageElements}
            </div>
            <DialogReduxForm onSubmit={addNewMassage}/>
        </div>
    )
}

type AddMassageFormType = {
    newMassageBody: string
}

const AddMassageForm: React.FC<InjectedFormProps<AddMassageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMassageBody"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm<AddMassageFormType>({form: "dialog"})(AddMassageForm)
