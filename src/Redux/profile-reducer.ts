export type ProfilePageType = {
    messageForNewPost: string,
    posts: PostsType[],
    profile: null,
}
export type PostsType = {
    id: number,
    likeCount: number,
    message: string,
}

const initialState: ProfilePageType = {
    profile: null,
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
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type ActionTypesProfileReducer =
    | AddPostType
    | ChangeTextType
    | SetUserProfileType

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

export type SetUserProfileType = ReturnType<typeof setUserProfileAC>

export const setUserProfileAC = (profile: null) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    }as const
}

export default profileReducer;