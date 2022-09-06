import React from 'react';
import { PostsType } from '../../../bll/profile-reducer';
import s from './MyPosts.module.css';
import { MyPostsReduxForm } from './PostForm/PostForm';
import Posts from './Posts/Posts';

export type MyPostsType = {
    posts: PostsType[],
    addPostHandler: (message: string) => void,
}
export type MyPostFormType = {
    MyPosts: string
}

export const MyPosts:React.FC<MyPostsType> = React.memo(({posts, addPostHandler}) => {
    const postElem = posts.map(p => <Posts massage={ p.message } key={ p.id } like={ p.likeCount } id={ p.id }/>)

    const addPost = (value: MyPostFormType) => {
        addPostHandler(value.MyPosts);
    }

    return (
        <div className={ s.postBlock }>
            <h3>My Posts</h3>
            <MyPostsReduxForm onSubmit={addPost}/>
            <div className={ s.posts }>
                { postElem }
            </div>
        </div>
    )
})


