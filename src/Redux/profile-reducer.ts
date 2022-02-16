import { Dispatch } from "redux"
import { userAPI } from "../api/api"

export type ProfilePageType = {
    messageForNewPost: string,
    posts: PostsType[],
    profile: ProfileType,
}

export type PostsType = {
    id: number,
    likeCount: number,
    message: string,
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription:string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string,
        large: string,
    }
}


const initialState: ProfilePageType = {
    profile: {
        userId: 2,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            facebook: '',
            instagram: '',
            vk: '',
            mainLink: '',
            twitter: '',
            website: '',
            youtube: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
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

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    }as const
}

export default profileReducer;


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    userAPI.profile(userId)
        .then(data => {
            dispatch(setUserProfileAC(data.data));
        })
}