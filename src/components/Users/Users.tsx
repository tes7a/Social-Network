import React from "react";
import {UserType} from "../../Redux/users-reducer";
import s from './users.module.css'
import axios from "axios";
import user from '../../assets/images/user.jpg';

type UsersType = {
    users: UserType[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
}

export const Users: React.FC<UsersType> = ({users, follow, unFollow, setUsers}) => {
    if (users.length === 0) {
        // setUsers([{
        //     id: 1,
        //     photos: {
        //         small: '',
        //         large: '',
        //     },
        //     followed: true,
        //     name: "Kostya",
        //     status: "Worked",
        //     location: {city: "Kharkiv", country: "Ukraine"}
        // },
        //     {
        //         id: 2,
        //         photos: {
        //             small: '',
        //             large: '',
        //         },
        //         followed: false,
        //         name: "Tanya",
        //         status: "Draw",
        //         location: {city: "Kharkiv", country: "Ukraine"}
        //     },
        //     {
        //         id: 3,
        //         photos: {
        //             small: '',
        //             large: '',
        //         },
        //         followed: true,
        //         name: "Rada",
        //         status: "Study medicine",
        //         location: {city: "St. Petersburg", country: "Russia"}
        //     },
        //     {
        //         id: 4,
        //         photos: {
        //             small: '',
        //             large: '',
        //         },
        //         followed: false,
        //         name: "Ruslan",
        //         status: "Smokes hookah",
        //         location: {city: "Minsk", country: "Belarus"}
        //     },])
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
        });
    }

    return <div>
        {
            users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : user} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            unFollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            follow(u.id)
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