import React from "react";
import {addPost, changeText, PostsType, ProfilePageType} from "../../../Redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import {AppRootStateType, store} from "../../../Redux/redux-store";
import {Dispatch, Store} from "redux";
import {DialogsPageType, newMessageBodyDialog, sendMessage} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";

// export type MyPostsContainerType = {
//     posts: PostsType[],
//     message: string,
//     store: Store<AppRootStateType, any>,
// }
//
// export const MyPostsContainer:React.FC<MyPostsContainerType> = ({posts,message,store}) => {
//     const addPostHandler = () => {
//         store.dispatch(addPost(message));
//         store.dispatch(changeText(''));
//     }
//     const onChangeHandler = (text: string) => {
//         store.dispatch(changeText(text));
//     }
//
//     return (
//        <MyPosts changeText={onChangeHandler} posts={posts} message={message} addPost={addPostHandler}/>)
// }


type MapStateToPropsType = {
    posts: PostsType[]
}

type MapDispatchToPropsType = {
    addPostHandler: (message: string) => void,
    onChangeHandler: (text: string) => void,

}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPostHandler: (message: string) => {
            store.dispatch(addPost(message));
            store.dispatch(changeText(''));
        },
        onChangeHandler: (text: string) => {
            dispatch(newMessageBodyDialog(text))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);