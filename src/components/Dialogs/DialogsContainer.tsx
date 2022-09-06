import React from 'react';
import { DialogsPageType, sendMessage } from '../../bll/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { compose, Dispatch } from 'redux';
import { AppRootStateType } from '../../bll/redux-store';
import { connect } from 'react-redux';
import  { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
}

type MapDispatchToPropsType = {
    sendMessage: (text: string) => void,
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (text: string) => {
            dispatch(sendMessage(text))
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

