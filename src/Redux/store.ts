export type TypeDialog = {
    name: string,
    id: number,
}

export type MessagesType = {
    id: number,
    message: string,
}

export type PostsType = {
    id: number,
    likeCount: number,
    message: string,
}

export type ProfilePageType = {
    messageForNewPost: string,
    posts: PostsType[],
}

export type DialogsPageType = {
    dialogs: TypeDialog[],
    messages: MessagesType[],
    newMessageBody: string,
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType,
}

export type storeType = {
    _state: RootStateType,
    _renderTree: () => void,
    subscribe: (observer: () => void) => void,
    gateState: () => RootStateType,
    dispatch: (action: ActionTypes) => void,
}

export type ActionTypes = AddPostType | ChangeTextType | NewMessageBodyDialogType | SendMessageType

export type AddPostType = ReturnType<typeof addPost>;

export const addPost = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage,
    } as const
};

export type ChangeTextType = ReturnType<typeof changeText>;

export const changeText = (newText: string) => {
    return {
        type: "CHANGE-TEXT",
        newText,
    } as const
};

type NewMessageBodyDialogType = ReturnType<typeof newMessageBodyDialog>;

export const newMessageBodyDialog = (body: string) => {
    return {
        type: "NEW-MESSAGE-BODY",
        body,
    } as const
};

type SendMessageType = ReturnType<typeof sendMessage>;

export const sendMessage = (newMessage: string) => {
    return{
        type: "SEND-MESSAGE",
        newMessage
    }as const
};

export const store: storeType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, likeCount: 15, message: "Hi, how are you?"},
                {id: 2, likeCount: 20, message: "It's my first post"}
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _renderTree() {
        console.log("state changed")
    },
    subscribe(observer) {
        this._renderTree = observer;
    },
    gateState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._renderTree();
        } else if (action.type === "CHANGE-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText;
            this._renderTree();
        } else if (action.type === "NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body;
            this._renderTree();
        }else if (action.type === 'SEND-MESSAGE'){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '' ;
            this._state.dialogsPage.messages.push(
                {id: new Date().getTime(),
                 message: body});
        }
    }
}