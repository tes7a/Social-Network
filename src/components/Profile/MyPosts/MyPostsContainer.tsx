import React from "react";
import {addPost, changeText, PostsType} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
    posts: PostsType[],
    messageForNewPost: string,
}

type MapDispatchToPropsType = {
    addPostHandler: (message: string) => void,
    onChangeHandler: (text: string) => void,
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPostHandler: (message: string) => {
            dispatch(addPost(message));
            dispatch(changeText(''));
        },
        onChangeHandler: (text: string) => {
            dispatch(changeText(text))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);