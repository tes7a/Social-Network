import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return(
        <div>
            <textarea> </textarea>
            <button>Add post</button>
            <button>Remove</button>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
        </div>
    </div>
    )
}

export default MyPosts;