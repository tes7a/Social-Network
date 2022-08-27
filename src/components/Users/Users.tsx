import React from 'react';
import s from './users.module.css';
import user from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../api/api';

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

export const Users: React.FC<UsersComponentType> = ({
    currentPage,
    currentPageHandler,
    followingInProgress,
    pageSize,
    setFollow,
    setUnFollow,
    totalUserCount,
    users,
}) => {

    const pagesCount = Math.ceil(totalUserCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            { pages.map(p => {
                return <span onClick={e => {
                    currentPageHandler(p)
                }} className={ currentPage === p ? s.selectedPage : '' }>{ p }</span>
            })}
        </div>
        {
            users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={ `/profile/${u.id}` }>
                        <img src={ u.photos.small != null ? u.photos.small : user } className={ s.userPhoto }/>
                        </NavLink>
                    </div>
                    <div>
                        { u.followed ? <button disabled={followingInProgress.some(id => id ===u.id) } onClick={ () => {
                               setUnFollow(u.id)
                            } }>Unfollow</button>
                            : <button disabled={ followingInProgress.some(id => id ===u.id) } onClick={ () => {
                                setFollow(u.id);
                            } }>Follow</button>}
                    </div>
                </span>
                    <span>
                    <div>{ u.name }</div>
                    <div>{ u.status }</div>
                </span>
                    <span>
                    <div>{ "u.location.country" }</div>
                    <div>{ "u.location.city" }</div>
                </span>
                </div>)
        }
    </div>
}