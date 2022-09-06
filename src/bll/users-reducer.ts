import { Dispatch } from 'redux';
import { userAPI, UserType, ResponseType } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

//types 
export type LocationType = {
    city: string,
    country: string,
}

type ActionsTypeUsersReducer =
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUserTotalCount>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>;

type ActionCreatorType = (userId: number) => ReturnType<typeof follow> | ReturnType<typeof unFollow>;
type ApiMethodType = (userId: number) => Promise<ResponseType<{}>>;

export type InitialState = {
    users: UserType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}

const initialState: InitialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const userReducer = (state = initialState, action: ActionsTypeUsersReducer): InitialState => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: true})
            }
        case "UN-FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: false})
            }
        case "SET-USERS":
            return { ...state, users: action.users }
        case "SET-CURRENT-PAGE":
            return { ...state, currentPage: action.currentPage }
        case "SET-USER-TOTAL-COUNT":
            return { ...state, totalUserCount: action.totalCount }
        case "SET-TOGGLE-IS-FETCHING":
            return { ...state, isFetching: action.isFetching }
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
};

//actions
export const follow = (userId: number) => ({ type: 'FOLLOW', userId } as const);

export const unFollow = (userId: number) => ({ type: 'UN-FOLLOW', userId } as const);

export const setUsers = (users: UserType[]) => ({ type: 'SET-USERS', users } as const);

export const setCurrentPage = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage } as const);

export const setUserTotalCount = (totalCount: number) =>
    ({ type: 'SET-USER-TOTAL-COUNT', totalCount } as const);

export const setToggleIsFetching = (isFetching: boolean) =>
    ({ type: 'SET-TOGGLE-IS-FETCHING', isFetching } as const);

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) =>
    ({ type: 'TOGGLE-IS-FOLLOWING', isFetching, userId } as const);

//thunks   
export const getUsers = (currentPage: number, pageSize: number) =>
    async (dispatch: Dispatch) => {
        if (initialState.users.length === 0) {
            dispatch(setToggleIsFetching(true));

            const res = await userAPI.getUsers(currentPage, pageSize);

            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(res.items));
            dispatch(setCurrentPage(currentPage));
            dispatch(setUserTotalCount(res.totalCount));

        }
    }

export const followUnFollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: ApiMethodType, actionCreator: ActionCreatorType) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    dispatch(toggleIsFollowingProgress(true, userId));

    const res = await apiMethod(userId);

    if (res.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const setFollow = (userId: number) =>
    async (dispatch: Dispatch) => {
        followUnFollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), follow);
    }

export const setUnFollow = (userId: number) =>
    async (dispatch: Dispatch) => {
        followUnFollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unFollow);
    }

