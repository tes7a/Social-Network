import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../bll/redux-store';
import {Header} from './Header';
import {authLogout} from '../../bll/auth-reducer'
import {compose} from 'redux';

class HeaderContainer extends React.Component<HeaderContainerProps> {
    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
            authLogout={this.props.authLogout}
        />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

//export default connect(mapStateToProps, {getAuth})(HeaderContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {authLogout})
)(HeaderContainer);

//types
type MapStateToPropsType = {
    isAuth: boolean,
    login: string,
}
type HeaderContainerType = {
    authLogout: () => void,
}
type HeaderContainerProps = MapStateToPropsType & HeaderContainerType