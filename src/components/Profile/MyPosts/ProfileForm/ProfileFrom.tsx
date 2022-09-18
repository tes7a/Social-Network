import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { ProfileDataType } from '../../../../api/api';
import { CreateFiled } from '../../../common/FormsControl/CreateField';
import { Input } from '../../../common/FormsControl/Input';
import { TextArea } from '../../../common/FormsControl/TextArea';
import  s from './ProfileForm.module.css';

type ProfileFormType = {
    profile: ProfileDataType,
}

type FormType = {
  fullName: string,
  lookingForAJob: boolean,
  aboutMe: string,
  lookingForAJobDescription: string,
}

export const ProfileForm: React.FC<InjectedFormProps<FormType, ProfileFormType> & ProfileFormType> = (props) => {
    return(
        <form onSubmit={ props.handleSubmit }>
          <div>
             <button>Save</button>
          </div>
          {props.error && <div className={ s.error }>
                    { props.error }
                </div>
              }
         <div>
           <b>Full name:</b> { CreateFiled("Full Name", "fullName", [], Input) }
         </div>
         <div>
           <b>Looking for a job:</b>
           { CreateFiled("", "lookingForAJob", [], Input, {type: "checkbox"}) }
         </div>
         <div>
           <b>About Me:</b>
           { CreateFiled("About Me", "aboutMe", [], TextArea) }
         </div>
           <div>
             <b>My professional skills:</b>  { CreateFiled("My professional skills", "lookingForAJobDescription", [], TextArea) }
           </div>
         <div>
           <b>Contacts</b>:
            { Object.keys(props.profile.contacts).map((key) => {
             return (
              <div key={ key }>
                <b>{ key } : { CreateFiled(key, "contacts." + key , [], Input) }</b>
              </div>
             );
           })}
         </div>
       </form>
    )
}

export const ReduxFormProfile = reduxForm<FormType, ProfileFormType>({ form: "profile-form" })(ProfileForm);