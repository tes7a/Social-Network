import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../api/api';
import user from '../../assets/images/user.jpg';
import s from './users.module.css';

type CurrentUserType = {
    users: UserType,
    followingInProgress: number[],
    setFollow: (userId: number) => void,
    setUnFollow: (userId: number) => void,
}

export const User: React.FC<CurrentUserType>  = ({
    users,
    followingInProgress,
    setFollow,
    setUnFollow,
}) => {
    return (
    <div>
        <span>
            <div>
                <NavLink to={ `/profile/${users.id}` }>
                <img src={ users.photos.small != null ? users.photos.small : user } className={ s.userPhoto } alt={"no have Img"}/>
                </NavLink>
            </div>
            <div>
                { users.followed ? <button disabled={followingInProgress.some(id => id === users.id) } onClick={ () => {
                    setUnFollow(users.id)
                    } }>Unfollow</button>
                    : <button disabled={ followingInProgress.some(id => id ===users.id) } onClick={ () => {
                        setFollow(users.id);
                    } }>Follow</button>}
            </div>
        </span>
            <span>
            <div>{ users.name }</div>
            <div>{ users.status }</div>
        </span>
            <span>
            <div>{ "u.location.country" }</div>
            <div>{ "u.location.city" }</div>
        </span>
    </div>
)}