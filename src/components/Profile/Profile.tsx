import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import {Store} from "redux";
import {AppRootStateType} from "../../Redux/redux-store";


export type ProfileType = {
    store: Store<AppRootStateType, any>,
}

const Profile: React.FC<ProfileType> = ({store}) => {
    const state = store.getState()

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
