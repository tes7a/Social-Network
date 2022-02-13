import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    followAC,
    getUsers,
    setCurrentPageAC, setFollow, setUnFollow,
    togleIsFollowingProgress,
    unFollowAC,
    UserType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

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
    setCurrentPage: (currentPage: number) => void,
    isFetching: boolean,
    followingInProgress: number[],
    getUsers: (currentPage: number, pageSize: number) => void,
    setFollow: (userId: number) => void,
    setUnFollow: (userId: number) => void,
}

class UsersComponentContainer extends React.Component<UsersComponentContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // if (this.props.users.length === 0) {
        //     this.props.setToggleFetching(true);
        //
        //     userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //    .then(data => {
        //         this.props.setToggleFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setUserTotalCount(data.totalCount);
        //     });
        // }
    };

    currentPageHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setToggleFetching(true);
        // this.props.setCurrentPage(pageNumber)
        //
        //     userAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //     this.props.setToggleFetching(false);
        //     this.props.setUsers(data.items)
        // });
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
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsers,
    setFollow: setFollow,
    setUnFollow: setUnFollow
})(UsersComponentContainer);