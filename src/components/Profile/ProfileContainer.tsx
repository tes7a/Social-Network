import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

// UI

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
            this.props.setUserProfile(res.data)
        })

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
        profile: state.profilePage.profile
    }
};

export const ProfileConnectContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
})(ProfileContainer);

// withRouter

const withUrlDataContainerComponent = withRouter(ProfileContainer);

//type

type ProfileContainerType = {
    profile: ProfileType,
    setUserProfile: (profile: ProfileType) => void,
}

type MapStateToPropsType = {
    profile: ProfileType,
}

type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = ProfileContainerType & MapStateToPropsType