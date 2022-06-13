import React from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileType} from "../../../../Redux/profile-reducer";
import { ProfileStatus } from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {props.profile.fullName}
                {props.profile.userId}
            </div>
        </div>)
}
