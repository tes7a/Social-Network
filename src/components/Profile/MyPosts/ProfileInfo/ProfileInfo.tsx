import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';
import user from '../../../../assets/images/user.jpg';
import { Preloader } from '../../../common/Preloader/Preloader';
import { ProfileType } from '../../../../bll/profile-reducer';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import { Contact } from '../Contact/Contact';

type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (photo: File) => void,
}

export type LinksType = "github" | "vk" | "facebook"| "instagram"| "twitter"| "website"| "youtube" | "mainLink";

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
                <img src={ profile.photos.large || user} alt={ 'img' } className={ s.mainPhoto }/>

                <div>
                    <div>
                        <b>Full name</b>: {profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job: </b>{ profile.lookingForAJob ? 'yes' : 'no' }
                    </div>
                    { profile.lookingForAJob && 
                        <div>
                            <b>My professional skills</b>: { profile.lookingForAJobDescription }
                        </div>
                    }

                    <div>
                        <b>Contacts</b>: { Object.keys(profile.contacts).map((key)=> {
                            return <Contact contactTitle={ key } contactValue={ profile.contacts[key as LinksType] }/>
                        }) }
                    </div>
                </div>
               
                <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus }/>
                { isOwner && <input onChange={ onMainPhotoSelected } type="file"/> }
            </div>
        </div>)
}
