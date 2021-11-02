import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType,} from "../../Redux/store";

export type ProfileType = {
    state: ProfilePageType,
    dispatch: (action: ActionTypes) => void,
}

const Profile: React.FC<ProfileType> = ({state, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} message={state.messageForNewPost} dispatch={dispatch}/>
        </div>
    )
}

export default Profile;
