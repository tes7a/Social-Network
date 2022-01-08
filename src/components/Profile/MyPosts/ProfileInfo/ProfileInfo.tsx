import React from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileType} from "../../../../Redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType,
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>

            <div>
                <img className={classes.profilePhoto}
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>)
}
