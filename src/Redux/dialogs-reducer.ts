import {ActionTypes, DialogsPageType, RootStateType, store} from "./store";

const rootState: RootStateType = store.gateState();

const dialogsReducer = (state = rootState.dialogsPage, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case "NEW-MESSAGE-BODY": {
            state.newMessageBody = action.body;
            return state
        }
        case "SEND-MESSAGE": {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push(
                {
                    id: new Date().getTime(),
                    message: body
                });
            return state
        }
        default:
            return state
    }
}

export type ActionTypesDialogsReducer = NewMessageBodyDialogType | SendMessageType

export type NewMessageBodyDialogType = ReturnType<typeof newMessageBodyDialog>;

export const newMessageBodyDialog = (body: string) => {
    return {
        type: "NEW-MESSAGE-BODY",
        body,
    } as const
};

export type SendMessageType = ReturnType<typeof sendMessage>;

export const sendMessage = (newMessage: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessage
    } as const
};

export default dialogsReducer;