import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfileComponentType = {
    profile: ProfileType
}

export const Profile = (props: ProfileComponentType) => {
        return  <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>;

}