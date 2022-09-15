import { Dispatch } from 'redux';
import { profileAPI, ProfileAPIType, ProfileDataType } from '../api/api';

//types
export type ProfilePageType = {
    posts: PostsType[],
    profile: ProfileAPIType,
    status: string,
}

export type PostsType = {
    id: number,
    likeCount: number,
    message: string,
}

export type ActionTypesProfileReducer =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof savePhotoToServer>
    | ReturnType<typeof saveProfileDataToServer>

const initialState: ProfilePageType = {
    profile: {
        userId: 20643,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        aboutMe: '',
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
            large: '',
        }
    },
    posts: [
        { id: 1, likeCount: 15, message: "Hi, how are you?" },
        { id: 2, likeCount: 20, message: "It's my first post" },
    ],
    status: '',
}


export const profileReducer = (state = initialState, action: ActionTypesProfileReducer): ProfilePageType => {
    switch (action.type) {
        case "profile/ADD-POST": {
            return {
                ...state,
                posts:
                    [...state.posts, { id: new Date().getTime(), message: action.postMessage, likeCount: 0 }]
            };
        }
        case "profile/SET-USER-PROFILE":
            return { ...state, profile: action.profile }
        case "profile/GET-STATUS":
            return { ...state, status: action.status }
        case "profile/DELETE-POST":
            return { ...state, posts: state.posts.filter(p => p.id !== action.id) }
        case "profile/SAVE-PHOTO-TO-SERVER": {
            return { ...state, profile: {
                ...state.profile,
                photos:  action.photo
            } }
        }
        case "profile/SAVE-PROFILE-DATA": {
            return {
                ...state, 
            }
        }
        default:
            return state
    }
}

//actions 
export const addPost = (postMessage: string) => ({ type: 'profile/ADD-POST', postMessage } as const);

export const setStatus = (status: string) => ({ type: 'profile/GET-STATUS', status } as const);

export const setUserProfile = (profile: ProfileAPIType) => ({ type: 'profile/SET-USER-PROFILE', profile } as const);

export const deletePost = (id: number) => ({ type: 'profile/DELETE-POST', id } as const);

export const savePhotoToServer = (photo: { small: string, large: string,}) => 
    ({ type: 'profile/SAVE-PHOTO-TO-SERVER', photo} as const);

export const saveProfileDataToServer = (profileData: ProfileDataType) => 
    ({type: 'profile/SAVE-PROFILE-DATA', profileData } as const);

//thunks
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.profile(userId);
    dispatch(setUserProfile(res.data));
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(setStatus(res.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(photo);

    if (res.data.resultCode === 0) {
        dispatch(savePhotoToServer(res.data.data))
    }    
}

export const saveProfile = (profileData: ProfileDataType) => async (dispatch: Dispatch) => {
    const res = await profileAPI.profileData(profileData);

    if (res.data.resultCode === 0) {
        //dispatch(saveProfileDataToServer(res.data.data))
    }
}