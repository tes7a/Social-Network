import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC,
    unFollowAC,
    UserType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setUserTotalCount: (totalCount: number) => void,
}

type UsersType = {
    users: UserType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setUserTotalCount: (totalCount: number) => void,
}

class UsersComponentContainer extends React.Component<UsersType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUserTotalCount(response.data.totalCount)
            });
        }
    };

    currentPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {




        return <Users users={this.props.users} currentPage={this.props.currentPage}
                      currentPageHandler={this.currentPageHandler} pageSize={this.props.pageSize}
                      follow={this.props.follow} unFollow={this.props.unFollow} totalUserCount={this.props.totalUserCount}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUserTotalCount: (totalCount: number) => {
            dispatch(setUserTotalCountAC(totalCount))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponentContainer);