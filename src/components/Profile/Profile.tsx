import React from 'react';
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../bll/profile-reducer';

type ProfileComponentType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (photo: File) => void,
}

export const Profile: React.FC<ProfileComponentType> = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
        return  <div>
            <ProfileInfo 
                isOwner={ isOwner } 
                profile={ profile } 
                status={ status } 
                updateStatus={ updateStatus }
                savePhoto={ savePhoto }
                />
            <MyPostsContainer/>
        </div>;

}