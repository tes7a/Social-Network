import React from "react";
import s from "./users.module.css";
import user from "../../assets/images/user.jpg";
import {NavLink, Redirect} from "react-router-dom";
import { UserType } from "../../api/api";

type UsersComponentType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    users: UserType[],
    currentPageHandler: (pageNumber: number) => void,
    followingInProgress: number[],
    setFollow: (userId: number) => void,
    setUnFollow: (userId: number) => void,
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
                        {u.followed ? <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                               props.setUnFollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                                props.setFollow(u.id);
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