import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    getStatus,
    getUserProfile,
    ProfileType, updateStatus,
} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";

// UI

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

//connect

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedId: state.auth.id,
        isAuth: state.auth.isAuth
    }
};

// const withUrlDataContainerComponent = withRouter(ProfileContainer);

// export const ProfileConnectContainer = WithAuthRedirect(withRouter(connect(mapStateToProps,
//     {getUserProfile: getUserProfile,})(ProfileContainer)));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfile,
        getStatus: getStatus,
        updateStatus: updateStatus
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
//type

type ProfileContainerType = {
    profile: ProfileType,
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void
}

type MapStateToPropsType = {
    profile: ProfileType,
    status: string,
    authorizedId: number,
    isAuth: boolean,
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = ProfileContainerType & MapStateToPropsType