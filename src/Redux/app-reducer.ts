import {Dispatch} from "redux"
import {stopSubmit} from "redux-form"
import {ThunkDispatch} from "redux-thunk"
import {authAPI} from "../api/api"
import {getAuth} from "./auth-reducer"
import {AppRootStateType} from "./redux-store"

export type intialStateType = {
    intialized: boolean
}

const intialState: intialStateType = {
    intialized: false
}

export const appReducer = (state = intialState, action: actionsType): intialStateType => {
    switch (action.type) {
        case "app/SET-INTIALIZED":
            return {...state, intialized: action.value}
        default:
            return state
    }
}

//actions
const setIntialized = (value: boolean) => ({type: "app/SET-INTIALIZED", value} as const)

//types
type actionsType =
    ReturnType<typeof setIntialized>

//thunks

export const initializeApp = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, actionsType>) => {
    let promise = dispatch(getAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(setIntialized(true));
        })
}


