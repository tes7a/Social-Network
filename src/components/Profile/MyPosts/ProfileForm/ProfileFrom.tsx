import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { ProfileAPIType } from '../../../../api/api';
import { CreateFiled } from '../../../common/FormsControl/CreateField';
import { Input } from '../../../common/FormsControl/Input';
import { TextArea } from '../../../common/FormsControl/TextArea';

type ProfileFormType = {
    profile: ProfileAPIType,
}

export const ProfileForm: React.FC<InjectedFormProps<ProfileFormType>> = (props) => {
    return(
        <form onSubmit={ props.handleSubmit }>
           <div>
             <button>Save</button>
           </div>
         <div>
           <b>Full name:</b> { CreateFiled("Full Name", "fullName", [], Input) }
         </div>
         <div>
           <b>Looking for a job:</b>
           { CreateFiled("", "lookingForAJob", [], Input, {type: "checkbox"}) }
         </div>
           <div>
             <b>My professional skills:</b>  { CreateFiled("My professional skills", "lookingForAJobDescription", [], TextArea) }
           </div>
         {/* <div>
           <b>Contacts</b>:{ " " }
            {Object.keys(profile.contacts).map((key) => {
             return (
               <Contact
                 key={ key }
                 contactTitle={ key }
                 contactValue={ profile.contacts[key as LinksType] }
               />
             );
           })}
         </div> */}
       </form>
    )
}

export const ReduxFormProfile = reduxForm<ProfileFormType>({form: "profile-form"})(ProfileForm)