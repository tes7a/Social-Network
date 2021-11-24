import React from "react";
import {PostsType} from '../../../Redux/store'
import {addPost, changeText} from "../../../Redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import {AppRootStateType, store} from "../../../Redux/redux-store";
import {Store} from "redux";

export type MyPostsContainerType = {
    posts: PostsType[],
    message: string,
    store: Store<AppRootStateType, any>,
}

export const MyPostsContainer:React.FC<MyPostsContainerType> = ({posts,message,store}) => {
    const addPostHandler = () => {
        store.dispatch(addPost(message));
        store.dispatch(changeText(''));
    }
    const onChangeHandler = (text: string) => {
        store.dispatch(changeText(text));
    }

    return (
       <MyPosts changeText={onChangeHandler} posts={posts} message={message} addPost={addPostHandler}/>)
}


