import React from 'react';
import { ProfileType } from '../../../../bll/profile-reducer';
import { Contact } from '../Contact/Contact';

type ProfileDataType = {
    profile: ProfileType,
}
export type LinksType = "github" | "vk" | "facebook"| "instagram"| "twitter"| "website"| "youtube" | "mainLink";

export const ProfileData: React.FC<ProfileDataType> = ({ profile }) => {
  return (
    <div>
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key as LinksType]}
            />
          );
        })}
      </div>
    </div>
  );
};
