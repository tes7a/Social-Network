import {AppRootStateType} from "./redux-store"
import {createSelector} from "reselect";
import { UserType } from "../api/api";

export const getUsersState = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersState, (users: UserType[]) => {
    return users.filter(u => true)
})

export const getPageSizeState = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalCountState = (state: AppRootStateType) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPageState = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingState = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressState = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}