import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {PostsType} from '../../../Redux/State'

export type MyPostsType = {
    posts: PostsType[]
}

const MyPosts:React.FC<MyPostsType> = ({posts}) => {

    const postElem = posts.map(p => <Posts massage={p.message} like={p.likeCount} id={p.id}/>)

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
                {postElem}
            </div>
        </div>
    )
}

export default MyPosts;
