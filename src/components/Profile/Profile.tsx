import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";

export type ProfileType = {
    posts: PostsType[]
}

const Profile:React.FC<ProfileType> = ({posts}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;
