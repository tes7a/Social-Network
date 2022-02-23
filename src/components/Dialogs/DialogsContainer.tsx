import React from "react";
import {DialogsPageType, newMessageBodyDialog, sendMessage} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import {WithAuthRedirect} from '../../hoc/withAuthRedirect'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
}

type MapDispatchToPropsType = {
    newMessageBodyDialog: (text: string) => void,
    sendMessage: (text: string) => void,
}

type AuthRedirect = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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


// @ts-ignore
compose()()

export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));