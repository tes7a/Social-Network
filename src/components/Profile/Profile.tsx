import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

export type ProfileType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
    changeText: (newText: string) => void
}

const Profile: React.FC<ProfileType> = ({state, addPost, changeText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost} message={state.messageForNewPost}
                     changeText={changeText}/>
        </div>
    )
}

export default Profile;
