import React from 'react';
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../Redux/profile-reducer';

type ProfileComponentType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
}

export const Profile: React.FC<ProfileComponentType> = ({profile, status, updateStatus}) => {
        return  <div>
            <ProfileInfo profile={ profile } status={ status } updateStatus={ updateStatus }/>
            <MyPostsContainer/>
        </div>;

}