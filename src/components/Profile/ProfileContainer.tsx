import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../bll/redux-store';
import {
    getStatus,
    getUserProfile,
    savePhoto, updateStatus,
} from '../../bll/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux';
import { ProfileAPIType } from '../../api/api';

type ProfileContainerType = {
    profile: ProfileAPIType,
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    savePhoto: (photo: File) => void,
}

type MapStateToPropsType = {
    profile: ProfileAPIType,
    status: string,
    authorizedId: number,
    isAuth: boolean,
}

type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;
type OwnPropsType = ProfileContainerType & MapStateToPropsType;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile
                 profile={ this.props.profile } 
                 status={ this.props.status } 
                 updateStatus={ this.props.updateStatus }
                 isOwner={ !this.props.match.params.userId }
                 savePhoto={ this.props.savePhoto }
                 />
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedId: state.auth.id,
        isAuth: state.auth.isAuth
    }
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfile,
        getStatus: getStatus,
        updateStatus: updateStatus,
        savePhoto: savePhoto,
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);

