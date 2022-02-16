import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';
import {Header} from './Header';
import {getAuth, setUserData} from '../../Redux/auth-reducer'
import {authAPI} from '../../api/api';

class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuth})(HeaderContainer);

//types
type MapStateToPropsType = {
    isAuth: boolean,
    login: string,
}
type HeaderContainerType = {
    getAuth: () => void
}
type HeaderContainerProps = MapStateToPropsType & HeaderContainerType