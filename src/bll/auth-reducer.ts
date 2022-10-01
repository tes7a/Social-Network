import { stopSubmit } from 'redux-form';
import { ThunkDispatch } from 'redux-thunk';
import { authAPI, securityAPI } from '../api/api';
import { AppRootStateType } from './redux-store';

//types
export type initialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    captcha: string,
}

type actionsType =
    | ReturnType<typeof setUserData>
    | ReturnType<typeof stopSubmit>
    | ReturnType<typeof getCaptchaUrl>

const initialState: initialStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    captcha: '',
}

export const authReducer = (state = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case "auth/SET-USER-DATA":
        case "auth/GET-CAPTCHA-URL": 
             return { ...state, ...action.payload }
        default:
            return state
    }
}

//actions
export const setUserData = (id: number, email: string, login: string, isAuth: boolean) =>
    ({ type: 'auth/SET-USER-DATA', payload: { id, email, login, isAuth } } as const);

export const getCaptchaUrl = (captcha: string) => ({ type: 'auth/GET-CAPTCHA-URL', payload: { captcha } } as const)

//thunks
export const getAuth = () => async (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data;
        dispatch(setUserData(id, login, email, true));
    }
}

export const authLogin = (password: string, email: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
        const res = await authAPI.login(email, password, rememberMe, captcha);
        if (res.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            if(res.data.resultCode === 10) {
                dispatch(getCaptcha());
            }
            let massage = res.data.messages.length > 0 ? res.data.messages[0] : "Some Error";
            dispatch(stopSubmit("login", { _error: massage }))
        }
    }

export const authLogout = () =>
    async (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
        const res = await authAPI.logout();
        if (res.data.resultCode === 0) {
            dispatch(setUserData(0, '', '', false));
        }
    }

export const getCaptcha = () => async (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
    const res = await securityAPI.captcha();
    const captcha = res.data.url;

     dispatch(getCaptchaUrl(captcha));
}


