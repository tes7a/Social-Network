import React from 'react';
import { ProfileAPIType } from '../../../../api/api';
import { Contact } from '../Contact/Contact';
import { LinksType } from '../ProfileInfo/ProfileInfo';

type ProfileDataType = {
    profile: ProfileAPIType,
    isOwner: boolean,
    onEditMode: (value: boolean) => void,
}

export const ProfileData: React.FC<ProfileDataType> = ({ profile, isOwner, onEditMode }) => {
  
  return (
    <div>
     { isOwner && 
        <div>
          <button onClick={() => onEditMode(true)}>Edit</button>
        </div> 
      }
      <div>
        <b>Full name</b>: { profile.fullName }
      </div>
      <div>
        <b>Looking for a job: </b>
        { profile.lookingForAJob ? "yes" : "no" }
      </div>
      <div>
           <b>About Me:</b>
           { profile.aboutMe }
         </div>
      { profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: { profile.lookingForAJobDescription }
        </div>
      )}

      <div>
        <b>Contacts</b>:
         { Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={ key }
              contactTitle={ key }
              contactValue={ profile.contacts[key as LinksType] }
            />
          );
        })}
      </div>
    </div>
  );
};
