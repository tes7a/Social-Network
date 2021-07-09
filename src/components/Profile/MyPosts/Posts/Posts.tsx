import React from "react";
import classes from './Posts.module.css';

const Posts = () => {
    return(
            <div className={classes.item}>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/3884.jpg"/>
                post 1
                <div>
                <span>Like</span>
                </div>
            </div>
    )
}

export default Posts;