import React, {ChangeEvent} from "react";
import {DialogsPageType, newMessageBodyDialog, sendMessage} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Dispatch, Store} from "redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

// type DialogType = {
//     store: Store<AppRootStateType, any>,
// }
//
// export const DialogsContainer: React.FC<DialogType> = ({store}) => {
//     const state = store.getState();
//
//     const onSendMessageClick = (text:string) => {
//         store.dispatch(sendMessage(text))
//         store.dispatch(newMessageBodyDialog(''))
//     }
//     const onChangeHandler = (text:string) => {
//         store.dispatch(newMessageBodyDialog(text))
//     }
//
//     return <Dialogs newMessageBodyDialog={onChangeHandler} sendMessage={onSendMessageClick}
//                     newDialog={state.dialogsPage.newMessageBody} state={state.dialogsPage}/>
// }
type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    newMessageBodyDialog: (text: string) => void,
    sendMessage: (text: string) => void,

}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newMessageBodyDialog: (text: string) => {
            dispatch(sendMessage(text))
            dispatch(newMessageBodyDialog(''))
        },
        sendMessage: (text: string) => {
            dispatch(newMessageBodyDialog(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);