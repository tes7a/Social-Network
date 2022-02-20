import React from "react";
import { ComponentType } from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import { AppRootStateType } from "../Redux/redux-store";

export function WithAuthRedirect <T>(Component: ComponentType<T>){
    function RedirectComponent(props: MapStateToProps) {
        let{isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

const mapStateToProps = (state: AppRootStateType) : MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

type MapStateToProps = {
    isAuth: boolean
}
