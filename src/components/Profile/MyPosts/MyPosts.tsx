import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {

    let postData = [
        {id: 1, likeCount: 15, message: "Hi, how are you?"},
        {id: 2, likeCount: 20, message: "It's my first post"}
    ]

    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea> </textarea>
            </div>
            <button>Add post</button>
            <button>Remove</button>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <Posts massage={postData[0].message} like={postData[0].likeCount} id={postData[0].id}/>
                <Posts massage={postData[1].message} like={postData[1].likeCount} id={postData[1].id}/>
            </div>
        </div>
    )
}

export default MyPosts;
