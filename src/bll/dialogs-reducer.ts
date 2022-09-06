//types
export type DialogsPageType = {
    dialogs: TypeDialog[],
    messages: MessagesType[],
}

export type TypeDialog = {
    name: string,
    id: number,
}

export type MessagesType = {
    id: number,
    message: string,
}

export type ActionTypesDialogsReducer = SendMessageType;

export type SendMessageType = ReturnType<typeof sendMessage>;

const initialState: DialogsPageType = {
    dialogs: [
        { id: 1, name: "Kostya" },
        { id: 2, name: "Tanya" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Max" },
        { id: 5, name: "Rada" },
        { id: 6, name: "Ruslan" },
        { id: 7, name: "Nastya" },
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "Gl" },
        { id: 5, message: "Thx" },
    ],
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypesDialogsReducer): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            return {...state, messages: [...state.messages,{ id:new Date().getTime(), message: action.newMessage }]};
        }
        default:
            return state
    }
}

//actions 
export const sendMessage = (newMessage: string) => ({  type: "SEND-MESSAGE",  newMessage } as const);