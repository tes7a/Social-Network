import React from 'react';
import s from './ProfileInfo.module.css';
import { Preloader } from '../../../common/Preloader/Preloader';
import { ProfileType } from '../../../../Redux/profile-reducer';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({ profile, status, updateStatus }) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={ s.descriptionBlock }>
                <img src={ profile.photos.large }/>
                <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus }/>
                { profile.fullName }
                { profile.userId }
            </div>
        </div>)
}
