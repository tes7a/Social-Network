import React from 'react';
import { addPost, PostsType } from '../../../Redux/profile-reducer';
import { MyPosts } from "./MyPosts";
import {AppRootStateType } from '../../../Redux/redux-store';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type MapStateToPropsType = {
    posts: PostsType[],
}

type MapDispatchToPropsType = {
    addPostHandler: (message: string) => void,
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPostHandler: (message: string) => {
            dispatch(addPost(message));
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);