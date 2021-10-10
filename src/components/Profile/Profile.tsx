import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

export type ProfileType = {
    state: ProfilePageType
}

const Profile:React.FC<ProfileType> = ({state}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    )
}

export default Profile;
