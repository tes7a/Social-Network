export type DialogsPageType = {
    dialogs: TypeDialog[],
    messages: MessagesType[],
    newMessageBody: string,
}

export type TypeDialog = {
    name: string,
    id: number,
}

export type MessagesType = {
    id: number,
    message: string,
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Kostya"},
        {id: 2, name: "Tanya"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Max"},
        {id: 5, name: "Rada"},
        {id: 6, name: "Ruslan"},
        {id: 7, name: "Nastya"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Gl"},
        {id: 5, message: "Thx"}
    ],
    newMessageBody: '',
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypesDialogsReducer): DialogsPageType => {
    switch (action.type) {
        case "NEW-MESSAGE-BODY": {
            return {...state, newMessageBody: action.text}
        }
        case "SEND-MESSAGE": {
            const stateCopy = {...state, message: [...state.messages]}
            stateCopy.messages.push(
                {
                    id: new Date().getTime(),
                    message: state.newMessageBody
                });
            return stateCopy
        }
        default:
            return state
    }
}

export type ActionTypesDialogsReducer = NewMessageBodyDialogType | SendMessageType

export type NewMessageBodyDialogType = ReturnType<typeof newMessageBodyDialog>;

export const newMessageBodyDialog = (text: string) => {
    return {
        type: "NEW-MESSAGE-BODY",
        text,
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