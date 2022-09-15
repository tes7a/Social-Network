import React from 'react';
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileAPIType, ProfileDataType } from '../../api/api';

type ProfileComponentType = {
    profile: ProfileAPIType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (photo: File) => void,
    saveProfile: (profile: ProfileDataType) => void,
}

export const Profile: React.FC<ProfileComponentType> = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
        return  <div>
            <ProfileInfo 
                isOwner={ isOwner } 
                profile={ profile } 
                status={ status } 
                updateStatus={ updateStatus }
                savePhoto={ savePhoto }
                saveProfile={ saveProfile }
                />
            <MyPostsContainer/>
        </div>;

}