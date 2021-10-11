import {renderTree} from "../render";

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

export type SidebarType = {

}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar : SidebarType
}

export let state : RootStateType = {
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
}

export let addPost = (postMessage: string) => {
    const newPost : PostsType = {
        id: new Date().getTime(),
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    renderTree(state);
}

export const changeText = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    renderTree(state);
}
