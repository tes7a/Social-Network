export type LocationType = {
    city: string,
    country: string,
}

export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType,
    photoUrl: string
}

export type InitialState = {
    users: UserType[],
}

const initialState: InitialState = {
    users: []
}

export const userReducer = (state = initialState, action: ActionsTypeUsersReducer): InitialState => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
};

type ActionsTypeUsersReducer = FollowType | UnFollowType | SetUsersType;

type FollowType = ReturnType<typeof followAC>;

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
};

type UnFollowType = ReturnType<typeof unFollowAC>;

export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
};

type SetUsersType = ReturnType<typeof setUsers>;

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
};
