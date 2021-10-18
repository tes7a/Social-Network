export type TypeDialog = {
    name: string
    id: number
}

export type MessagesType = {
    id: number,
    message: string
}

export type PostsType = {
    id: number,
    likeCount: number,
    message: string
}

export type ProfilePageType = {
    messageForNewPost: string,
    posts: PostsType[]
}

export type DialogsPageType = {
    dialogs: TypeDialog[],
    messages: MessagesType[]
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export type storeType = {
    _state: RootStateType,
    changeText: (newText: string) => void,
    addPost: (postMessage: string) => void,
    _renderTree: () => void,
    subscribe: (observer: () => void) => void,
    gateState: () => RootStateType
}

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
                {id: 7, name: "Karlitsa"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Yo"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "Gl"},
                {id: 5, message: "Thx"}
            ]
        },
        sidebar: {}
    },
    changeText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._renderTree();
    },
    addPost(postMessage: string) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: postMessage,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._renderTree();
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
}