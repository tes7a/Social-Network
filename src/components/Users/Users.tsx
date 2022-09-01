import React from 'react';
import s from './users.module.css';
import user from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../api/api';
import { Pagination } from './Pagination/Pagination';
import { User } from './User';

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
    return <div>
       <Pagination 
            currentPage={currentPage}
            currentPageHandler={currentPageHandler}
            pageSize={pageSize}
            totalUserCount={totalUserCount}
         />
        {
            users.map(u =><User 
                followingInProgress={followingInProgress}
                setFollow={setFollow}
                setUnFollow={setUnFollow}
                users={u}
                key={u.id}
                />)
        }
    </div>
}