import React from "react";
import { ComponentType } from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    getUserProfile,
    ProfileType,
} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";
import {WithAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";

// UI

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

//connect

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

// const withUrlDataContainerComponent = withRouter(ProfileContainer);

// export const ProfileConnectContainer = WithAuthRedirect(withRouter(connect(mapStateToProps,
//     {getUserProfile: getUserProfile,})(ProfileContainer)));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfile,}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
//type

type ProfileContainerType = {
    profile: ProfileType,
    getUserProfile: (userId: string) => void,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void
}

type MapStateToPropsType = {
    profile: ProfileType,
    status: string
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = ProfileContainerType & MapStateToPropsType