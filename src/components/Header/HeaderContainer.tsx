import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';
import {Header} from './Header';
import {setUserData} from '../../Redux/auth-reducer'

class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data;
                    this.props.setUserData(id, login, email);
                }
            })
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);

//types
type MapStateToPropsType = {
    isAuth: boolean,
    login: string,
}
type HeaderContainerType = {
    setUserData: (id: number, login: string, email: string) => void
}
type HeaderContainerProps = MapStateToPropsType & HeaderContainerType