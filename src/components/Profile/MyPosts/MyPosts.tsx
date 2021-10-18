import React, { ChangeEvent } from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {PostsType} from '../../../Redux/store'

export type MyPostsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
    changeText: (newText: string) => void
    message: string
}

const MyPosts:React.FC<MyPostsType> = ({posts,addPost,message,changeText}) => {
    const postElem = posts.map(p => <Posts massage={p.message} like={p.likeCount} id={p.id}/>)
    const addPostHandler = () => {
        addPost(message)
        changeText('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeText(e.currentTarget.value)
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
