import { InjectedFormProps, reduxForm } from 'redux-form';
import { requiredField } from '../../../utils/validators/validators';
import { CreateFiled } from '../../common/FormsControl/CreateField';
import { Input } from '../../common/FormsControl/Input';
import s from './LoginForm.module.css';

type FormData = {
    login: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
}

type LoginFormType = {
    captcha: string,
}

export const LoginForm: React.FC<InjectedFormProps<FormData, LoginFormType> & LoginFormType> = (props) => {
    return (
            <form onSubmit={ props.handleSubmit }>
                { CreateFiled("Email", "email", [ requiredField ], Input) }
                { CreateFiled("Password", "password", [ requiredField ], Input, { type: "password" }) }
                { CreateFiled(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me") }

                {props.captcha && <img src={ props.captcha } alt='img'/>}
                {props.captcha && CreateFiled("Symbols from image", "captcha", [requiredField], Input) }

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

export const LoginReduxForm = reduxForm<FormData, LoginFormType>({form: 'login'})(LoginForm)