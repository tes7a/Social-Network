import React from "react";
import { connect } from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../Redux/redux-store";
import {followAC, setUsers, unFollowAC, UserType} from "../../Redux/users-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: UserType[],
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return{
        users: state.usersPage.users,
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return{
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsers(users))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);