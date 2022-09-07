import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';
import user from '../../../../assets/images/user.jpg';
import { Preloader } from '../../../common/Preloader/Preloader';
import { ProfileType } from '../../../../bll/profile-reducer';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (photo: File) => void,
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files?.length && savePhoto(e.target.files[0]);
    }

    if(!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={ s.descriptionBlock }>
                <img src={ profile.photos.large || user} alt={ 'img' } className={s.mainPhoto}/>
                <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus }/>
                { isOwner && <input onChange={ onMainPhotoSelected } type="file"/> }
                { profile.fullName }
                { profile.userId }
            </div>
        </div>)
}
