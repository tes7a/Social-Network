import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setFollow, setUnFollow,
    setUsersAC,
    togleIsFollowingProgress,
    unFollowAC,
    UserType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";
import { Dispatch } from "redux";

type MapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

type UsersComponentContainerType = {
    users: UserType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setUserTotalCount: (totalCount: number) => void,
    isFetching: boolean,
    setToggleFetching: (isFetching: boolean) => void,
    togleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[],
    getUsers: (currentPage: number, pageSize: number) => void,
    setFollow: (userId: number) => void,
    setUnFollow: (userId: number) => void,
}

class UsersComponentContainer extends React.Component<UsersComponentContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };

    currentPageHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users} currentPage={this.props.currentPage}
                   currentPageHandler={this.currentPageHandler} pageSize={this.props.pageSize}
                   totalUserCount={this.props.totalUserCount}
                   followingInProgress={this.props.followingInProgress}
                   setFollow={setFollow} setUnFollow={setUnFollow}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsers,
    setFollow: setFollow,
    setUnFollow: setUnFollow
})(UsersComponentContainer);