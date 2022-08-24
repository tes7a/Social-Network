import { Dispatch } from "redux"
import {profileAPI} from "../api/api"

export type ProfilePageType = {
    posts: PostsType[],
    profile: ProfileType,
    status: string
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
    },
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
    posts: [
        {id: 1, likeCount: 15, message: "Hi, how are you?"},
        {id: 2, likeCount: 20, message: "It's my first post"}
    ],
    status: '',
}


const profileReducer = (state = initialState, action: ActionTypesProfileReducer): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            return {...state, posts: [...state.posts, { id: new Date().getTime(), message: action.postMessage, likeCount: 0}]};
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "profile/GET-STATUS":
            return {...state, status: action.status}
        case "profile/DELETE-POST": 
            return {...state,
                    posts: state.posts.filter(p => p.id !== action.id)
                }
        default:
            return state
    }
}

export type ActionTypesProfileReducer =
    | AddPostType
    | SetUserProfileType
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

export type AddPostType = ReturnType<typeof addPost>;

export const addPost = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage,
    } as const
};

export type SetUserProfileType = ReturnType<typeof setUserProfileAC>

export const setStatus = (status: string) => ({type: 'profile/GET-STATUS', status}as const);

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    }as const
}

export const deletePost = (id: number) => ({type: 'profile/DELETE-POST', id} as const)

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.profile(userId)
        .then(data => {
            dispatch(setUserProfileAC(data.data));
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;