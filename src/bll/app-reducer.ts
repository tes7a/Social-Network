import { ThunkDispatch } from 'redux-thunk';
import { getAuth } from './auth-reducer';
import { AppRootStateType } from './redux-store';

//types
export type initialStateType = {
    initialized: boolean,
}

type actionsType =
    | ReturnType<typeof setInitialized>

const initialState: initialStateType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case "app/SET-INITIALIZED":
            return { ...state, initialized: action.value }
        default:
            return state
    }
}

//actions
const setInitialized = (value: boolean) => ({ type: "app/SET-INITIALIZED", value } as const);

//thunks
export const initializeApp = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
    let promise = dispatch(getAuth());
    Promise.all([ promise ])
        .then(() => {
            dispatch(setInitialized(true));
        })
}


