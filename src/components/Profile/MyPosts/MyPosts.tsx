import React, { ChangeEvent } from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {ActionTypes, PostsType} from '../../../Redux/store'
import { addPost, changeText } from "../../../Redux/profile-reducer";



export type MyPostsType = {
    posts: PostsType[],
    message: string,
    dispatch: (action: ActionTypes) => void,
}

const MyPosts:React.FC<MyPostsType> = ({posts,message,dispatch}) => {
    const postElem = posts.map(p => <Posts massage={p.message} like={p.likeCount} id={p.id}/>)
    const addPostHandler = () => {
        dispatch(addPost(message))
        dispatch(changeText(''))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeText(e.currentTarget.value))
    }

    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea value={message} onChange={onChangeHandler}> </textarea>
            </div>
            <button onClick={addPostHandler}>Add post</button>
            <button>Remove</button>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                {postElem}
            </div>
        </div>
    )
}

export default MyPosts;
