import { stopSubmit } from 'redux-form';
import { ThunkDispatch } from 'redux-thunk';
import { authAPI } from '../api/api';
import { AppRootStateType } from './redux-store';

//types
export type initialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
}

type actionsType =
    | ReturnType<typeof setUserData>
    | ReturnType<typeof stopSubmit>

const initialState: initialStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
}

export const authReducer = (state = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case "auth/SET-USER-DATA":
            return { ...state, ...action.payload }
        default:
            return state
    }
}

//actions
export const setUserData = (id: number, email: string, login: string, isAuth: boolean) =>
    ({ type: 'auth/SET-USER-DATA', payload: { id, email, login, isAuth } } as const);

//thunks
export const getAuth = () => async (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data;
        dispatch(setUserData(id, login, email, true));
    }
}

export const authLogin = (password: string, email: string, rememberMe: boolean) =>
    async (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
        const res = await authAPI.login(email, password, rememberMe);
        if (res.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
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


