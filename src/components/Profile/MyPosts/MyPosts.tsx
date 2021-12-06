import React, { ChangeEvent } from "react";
import { PostsType } from "../../../Redux/profile-reducer";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";


export type MyPostsType = {
    posts: PostsType[],
    messageForNewPost: string,
    addPostHandler: (message: string) => void,
    onChangeHandler: (text: string) => void,
}

export const MyPosts:React.FC<MyPostsType> = ({posts,messageForNewPost,onChangeHandler, addPostHandler}) => {
    const postElem = posts.map(p => <Posts massage={p.message} key={p.id} like={p.likeCount} id={p.id}/>)

    const addPostHandler_ = () => {
        addPostHandler(messageForNewPost);
    }
    const onChangeHandler_ = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeHandler(e.currentTarget.value);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea value={messageForNewPost} onChange={onChangeHandler_}> </textarea>
            </div>
            <button onClick={addPostHandler_}>Add post</button>
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
