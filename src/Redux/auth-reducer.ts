import {Dispatch} from "redux"
import { ThunkDispatch } from "redux-thunk"
import {authAPI} from "../api/api"
import { AppRootStateType } from "./redux-store"

export type intialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

const intialState: intialStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state = intialState, action: actionsType): intialStateType => {
    switch (action.type) {
        case "auth/SET-USER-DATA":
            return {...state,...action.payload}
        default:
            return state
    }
}

//actions
export const setUserData = (id: number, email: string, login: string, isAuth: boolean) =>
    ({type: 'auth/SET-USER-DATA', payload: {id, email, login, isAuth}} as const)

//types
type actionsType = ReturnType<typeof setUserData>

export const getAuth = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data;
                dispatch(setUserData(id, login, email, true));
            }
        })
}

export const authLogin = (password: string, email: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuth());
            }
        })
}

export const authLogout = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(0, '', '', false));
            }
        })
}


