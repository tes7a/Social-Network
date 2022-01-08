import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profile: null,
}

export const Profile = (props: ProfileType) => {
        return  <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>;

}