import React, {ChangeEvent} from "react";
import {ActionTypes, DialogsPageType} from "../../Redux/store";
import {newMessageBodyDialog, sendMessage} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Store} from "redux";
import {AppRootStateType} from "../../Redux/redux-store";

type DialogType = {
    store: Store<AppRootStateType, any>,
}

export const DialogsContainer: React.FC<DialogType> = ({store}) => {
    const state = store.getState()
    const newDialog = store.getState().dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        store.dispatch(sendMessage(newDialog))
        store.dispatch(newMessageBodyDialog(''))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        store.dispatch(newMessageBodyDialog(e.currentTarget.value))
    }

    return <Dialogs newMessageBodyDialog={onSendMessageClick} sendMessage={onChangeHandler}
                    newDialog={state.dialogsPage.newMessageBody} state={state.dialogsPage}/>

}
