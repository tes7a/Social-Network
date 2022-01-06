import React from "react";
import {UserType} from "../../Redux/users-reducer";
import './users.module.css'
import axios from "axios";
import user from '../../assets/images/user.jpg';

type UsersType = {
    users: UserType[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
}

export const FunkUsers: React.FC<UsersType> = ({users, follow, unFollow, setUsers}) => {
    const getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : user} className={"photo"}/>
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