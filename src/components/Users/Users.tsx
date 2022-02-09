import React from "react";
import s from "./users.module.css";
import user from "../../assets/images/user.jpg";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import { userAPI } from "../../api/api";

type UsersComponentType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    users: UserType[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    currentPageHandler: (pageNumber: number) => void,
    togleIsFollowingProgress: (isFetching: boolean) => void,
    followingInProgress: boolean
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
                        {u.followed ? <button disabled={props.followingInProgress} onClick={() => {
                                props.togleIsFollowingProgress(true);
                                userAPI.unfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                        props.togleIsFollowingProgress(false);
                                    });

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.togleIsFollowingProgress(true);
                                userAPI.follow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.togleIsFollowingProgress(false);
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