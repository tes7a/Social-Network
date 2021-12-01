import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import {Store} from "redux";
import {AppRootStateType} from "../../Redux/redux-store";

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
