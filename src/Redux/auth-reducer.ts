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

export const authReducer = (state = intialState, action: actionsType) : intialStateType => {
        switch (action.type) {
            case "auth/SET-USER-DATA":
                return {...state, ...action.data, isAuth: true}
            default:
                return state
        }
}

//actions
export const setUserData = (id: number, email: string, login: string) =>
    ({type: 'auth/SET-USER-DATA', data: {id,email,login}}as const)

//types
type actionsType = ReturnType<typeof setUserData>