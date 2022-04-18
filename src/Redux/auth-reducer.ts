import {Dispatch} from "redux"
import {authAPI} from "../api/api"

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
            return {...state, ...action.data, isAuth: true}
        case "auth/SET-LOGIN":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

//actions
export const setUserData = (id: number, email: string, login: string) =>
    ({type: 'auth/SET-USER-DATA', data: {id, email, login}} as const)

export const login = (password: string, email: string, rememberMe: boolean) =>
    ({type: "auth/SET-LOGIN", data: {password, email, rememberMe}} as const)

//types
type actionsType =
    ReturnType<typeof setUserData>
    | ReturnType<typeof login>

export const getAuth = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data;
                dispatch(setUserData(id, login, email));
            }
        })
}

export const authLogin = (password: string, email: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data;
                dispatch(login(id, login, email));
            }
        })
}


