export type ProfilePageType = {
    messageForNewPost: string,
    posts: PostsType[],
}
export type PostsType = {
    id: number,
    likeCount: number,
    message: string,
}

const initialState: ProfilePageType = {
    messageForNewPost: '',
    posts: [
        {id: 1, likeCount: 15, message: "Hi, how are you?"},
        {id: 2, likeCount: 20, message: "It's my first post"}
    ]
}


const profileReducer = (state = initialState, action: ActionTypesProfileReducer): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            return {...state, posts: [...state.posts, { id: new Date().getTime(), message: action.postMessage, likeCount: 0}]};
        }
        case "CHANGE-TEXT": {
            return {...state, messageForNewPost: action.newText};
        }
        default:
            return state
    }
}

export type ActionTypesProfileReducer = AddPostType | ChangeTextType

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

export default profileReducer;