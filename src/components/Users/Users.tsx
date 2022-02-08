import React from "react";
import s from "./users.module.css";
import user from "../../assets/images/user.jpg";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersComponentType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    users: UserType[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    currentPageHandler: (pageNumber: number) => void
}

export const Users = (props: UsersComponentType) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={e => {
                    props.currentPageHandler(p)
                }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : user} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '48fd56ac-8cc3-45ea-82e5-98928a417a7f'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '48fd56ac-8cc3-45ea-82e5-98928a417a7f'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
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