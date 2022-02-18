import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";
import { Redirect } from "react-router-dom";

type ProfileComponentType = {
    profile: ProfileType,
    isAuth: boolean
}

export const Profile = (props: ProfileComponentType) => {
    if(!props.isAuth){
        return <Redirect to={"/login"}/>
    }

        return  <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>;

}