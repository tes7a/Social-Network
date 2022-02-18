import React from "react";
import {DialogsPageType, newMessageBodyDialog, sendMessage} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    newMessageBodyDialog: (text: string) => void,
    sendMessage: (text: string) => void,
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newMessageBodyDialog: (text: string) => {
            dispatch(newMessageBodyDialog(text))
        },
        sendMessage: (text: string) => {
            dispatch(sendMessage(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);