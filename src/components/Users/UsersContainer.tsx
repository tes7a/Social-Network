import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    followAC,
    getUsers,
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
import {compose, Dispatch } from "redux";
import { Redirect } from "react-router-dom";
import {WithAuthRedirect} from '../../hoc/withAuthRedirect'
import {getCurrentPageState, getFollowingInProgressState, getIsFetchingState, getPageSizeState,
    getTotalCountState, getUsersState } from "../../Redux/users-selectors";

type MapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}

type MapDispatchToProps = {
    setCurrentPage: (currentPage: number) => void,
    getUsers:  (currentPage: number, pageSize: number) => void,
    setFollow: (userId: number) => void,
    setUnFollow: (userId: number) => void,
}

type UsersComponentContainerType = MapDispatchToProps & MapStateToPropsType

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
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   currentPageHandler={this.currentPageHandler}
                   totalUserCount={this.props.totalUserCount}
                   followingInProgress={this.props.followingInProgress}
                   setFollow={this.props.setFollow}
                   setUnFollow={this.props.setUnFollow}
            />
        </>
    }
}
// const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// };

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsersState(state),
        pageSize: getPageSizeState(state),
        totalUserCount: getTotalCountState(state),
        currentPage: getCurrentPageState(state),
        isFetching: getIsFetchingState(state),
        followingInProgress: getFollowingInProgressState(state),
    }
};

export default compose<React.ComponentType>(
    connect<MapStateToPropsType , MapDispatchToProps , {}, AppRootStateType>(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsers,
        setFollow: setFollow,
        setUnFollow: setUnFollow
    }),
    WithAuthRedirect
)(UsersComponentContainer);