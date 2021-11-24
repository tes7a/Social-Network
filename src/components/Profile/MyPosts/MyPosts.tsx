import React, { ChangeEvent } from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {PostsType} from '../../../Redux/store'

export type MyPostsType = {
    posts: PostsType[],
    message: string,
    changeText: (text: string) => void,
    addPost: (text: string) => void
}

export const MyPosts:React.FC<MyPostsType> = ({posts,message,changeText, addPost}) => {
    const postElem = posts.map(p => <Posts massage={p.message} like={p.likeCount} id={p.id}/>)
    const addPostHandler = () => {
        addPost(message);
        addPost('');
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeText(e.currentTarget.value);
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
