import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import { Input } from "../common/FormsControl/FormControl";
import {maxlength, requiredField} from "../../utils/validators/validators";
import { connect } from "react-redux";
import { authLogin } from "../../Redux/auth-reducer";
import { AppRootStateType } from "../../Redux/redux-store";
import { Redirect } from "react-router-dom";
import s from "./Login.module.css";

type LoginProps = {
    id: number,
    email: string,
    isAuth: boolean,
    login: string,
    authLogin: (password: string, email: string, rememberMe: boolean) => void,
}

export const Login = (props: LoginProps) => {
    const onSubmit = (formData: any) => {
        props.authLogin(formData.password,formData.email,formData.rememberMe);
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type MapStateToPropsType = {
    id: number,
    email: string,
    isAuth: boolean,
    login: string,
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export const LoginContainer = connect(mapStateToProps, {authLogin})(Login);

const LoginForm: React.FC<InjectedFormProps<FormData>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[requiredField]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </div>
                {props.error && <div className={s.error}>
                    {props.error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm<FormData>({form: 'login'})(LoginForm)

type FormData = {
    login: string,
    password: string,
    rememberMe: boolean,
}