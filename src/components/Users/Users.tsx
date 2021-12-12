import React from "react";
import user from "../../assets/images/user.jpg";
import s from "./users.module.css";
import axios from "axios";
import {UserType} from "../../Redux/users-reducer";

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

export class Users extends React.Component<UsersType> {

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
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return <div>
            <div>
                {pages.map(p => {
                    return <span onClick={e => {
                        this.currentPageHandler(p)
                    }} className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : user} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            this.props.unFollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                        <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                    </div>)
            }
        </div>
    }
}