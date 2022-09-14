import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css';
import user from '../../../../assets/images/user.jpg';
import { Preloader } from '../../../common/Preloader/Preloader';
import { saveProfile } from '../../../../bll/profile-reducer';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import { ProfileData } from '../ProfileData/ProfileData';
import { ReduxFormProfile } from '../ProfileForm/ProfileFrom';
import { ProfileAPIType } from '../../../../api/api';

type ProfileInfoType = {
    profile: ProfileAPIType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (photo: File) => void,
}

export type LinksType = "github" | "vk" | "facebook"| "instagram"| "twitter"| "website"| "youtube" | "mainLink";

export const ProfileInfo: React.FC<ProfileInfoType> = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files?.length && savePhoto(e.target.files[0]);
    }

    const onSubmit = (formData: any) => {
       //saveProfile({formData});
    }

    if(!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={ s.descriptionBlock }>
                <img src={ profile.photos.large || user} alt={ 'img' } className={ s.mainPhoto }/>

                { editMode 
                    ?<ReduxFormProfile/> 
                    :<ProfileData profile={ profile } isOwner={ isOwner } onEditMode={ setEditMode }/> }
               
                <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus }/>
                { isOwner && <input onChange={ onMainPhotoSelected } type="file"/> }
            </div>
        </div>)
}
