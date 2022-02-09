import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setToggleIsFetchingAC,
    setUsersAC,
    setUserTotalCountAC,
    togleIsFollowingProgress,
    unFollowAC,
    UserType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

type MapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean
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
    togleIsFollowingProgress: (isFetching: boolean) => void
}

class UsersComponentContainer extends React.Component<UsersComponentContainerType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setToggleFetching(true);

            userAPI.getUsers(this.props.currentPage, this.props.pageSize)
           .then(data => {
                this.props.setToggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setUserTotalCount(data.totalCount);
            });
        }
    };

    currentPageHandler = (pageNumber: number) => {
        this.props.setToggleFetching(true);
        this.props.setCurrentPage(pageNumber)

            userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.setToggleFetching(false);
            this.props.setUsers(data.items)
        });
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users} currentPage={this.props.currentPage}
                   currentPageHandler={this.currentPageHandler} pageSize={this.props.pageSize}
                   follow={this.props.follow} unFollow={this.props.unFollow}
                   totalUserCount={this.props.totalUserCount} togleIsFollowingProgress={this.props.togleIsFollowingProgress}/>
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
    setUserTotalCount: setUserTotalCountAC,
    setToggleFetching: setToggleIsFetchingAC,
    togleIsFollowingProgress: togleIsFollowingProgress
})(UsersComponentContainer);