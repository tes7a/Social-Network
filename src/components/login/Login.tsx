import React from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../../bll/auth-reducer';
import { AppRootStateType } from '../../bll/redux-store';
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './LoginFrom/LoginForm';

type LoginProps = {
    id: number,
    email: string,
    isAuth: boolean,
    login: string,
    captcha: string,
    authLogin: (
        password: string, 
        email: string, 
        rememberMe: boolean,
        captcha: string,
        ) => void,
}

type MapStateToPropsType = {
    id: number,
    email: string,
    isAuth: boolean,
    login: string,
    captcha: string,
}

export const Login: React.FC<LoginProps> = ({ authLogin, isAuth, captcha }) => {
    const onSubmit = (formData: any) => {
        authLogin(formData.password, formData.email, formData.rememberMe, formData.captcha);
    }

    if(isAuth){
        return <Redirect to={ '/profile' }/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={  onSubmit } captcha={ captcha }/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    captcha: state.auth.captcha,
});

export const LoginContainer = connect(mapStateToProps, { authLogin })(Login);