import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { requiredField } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControl/Input';
import s from './LoginForm.module.css';

type FormData = {
    login: string,
    password: string,
    rememberMe: boolean,
}

export const LoginForm: React.FC<InjectedFormProps<FormData>> = (props) => {
    return (
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field placeholder={ "Email" } name={ "email" } component={ Input} validate={ [ requiredField ] }/>
                </div>
                <div>
                    <Field placeholder={ "Password" } name={ "password" } type={ "password" } component={ Input } validate={ [ requiredField ] }/>
                </div>
                <div>
                    <Field type={ "checkbox" } name={ "rememberMe" } component={ Input }/> remember me
                </div>
                {props.error && <div className={ s.error }>
                    { props.error }
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

export const LoginReduxForm = reduxForm<FormData>({form: 'login'})(LoginForm)