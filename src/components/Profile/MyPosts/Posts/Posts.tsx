import React from "react";
import classes from './Posts.module.css';

type PostsMassageLike = {
    massage : string;
    like : number;
}

const Posts = (props:PostsMassageLike) => {
    return(
            <div className={classes.item}>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/3884.jpg"/>
                {props.massage}
                <div>
                <span>Like {props.like} </span>
                </div>
            </div>
    )
}

export default Posts;