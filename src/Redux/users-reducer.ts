export type LocationType = {
    city: string,
    country: string,
}

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType,
    photos: {
        small: string
        large: string
    }
}

export type InitialState = {
    users: UserType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
}

const initialState: InitialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
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
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-USER-TOTAL-COUNT":
            return {...state, totalUserCount: action.totalCount}
        default:
            return state
    }
};

type ActionsTypeUsersReducer = FollowType | UnFollowType | SetUsersType | SetCurrentPageType | SetUserTotalCount;

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

type SetUsersType = ReturnType<typeof setUsersAC>;

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
};

type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>;

export const setCurrentPageAC = (currentPage: number) => {
    return{
        type: 'SET-CURRENT-PAGE',
        currentPage
    }as const
};

type SetUserTotalCount = ReturnType<typeof setUserTotalCountAC>;

export const setUserTotalCountAC = (totalCount: number) => {
    return{
        type: 'SET-USER-TOTAL-COUNT',
        totalCount
    }as const
};