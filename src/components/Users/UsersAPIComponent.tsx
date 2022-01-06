import React from "react";
import axios from "axios";
import {UserType} from "../../Redux/users-reducer";
import { Users } from "./Users";

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

export class UsersAPIComponent extends React.Component<UsersType> {

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