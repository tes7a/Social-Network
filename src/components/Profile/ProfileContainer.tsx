import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import { setUserProfileAC } from "../../Redux/profile-reducer";


// UI
export class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            this.props.setUserProfile(res.data)
        });

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
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

//type

type ProfileContainerType = {
    profile: null,
    setUserProfile: (profile: null) => void,
}

type MapStateToPropsType = {
    profile: null,
}