import profileReducer, {ActionTypesProfileReducer} from "./profile-reducer";
import dialogsReducer, {ActionTypesDialogsReducer} from "./dialogs-reducer";

type TypeDialog = {
    name: string,
    id: number,
}

type MessagesType = {
    id: number,
    message: string,
}

type PostsType = {
    id: number,
    likeCount: number,
    message: string,
}

type ProfilePageType = {
    messageForNewPost: string,
    posts: PostsType[],
}

type DialogsPageType = {
    dialogs: TypeDialog[],
    messages: MessagesType[],
    newMessageBody: string,
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType,
}

type storeType = {
    _state: RootStateType,
    _renderTree: () => void,
    subscribe: (observer: () => void) => void,
    gateState: () => RootStateType,
    dispatch: (action: ActionTypes) => void,
}

type ActionTypes = ActionTypesDialogsReducer | ActionTypesProfileReducer

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
       // this._state.profilePage = profileReducer(this._state.profilePage, action);
       // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
       // this._renderTree()
    }
}