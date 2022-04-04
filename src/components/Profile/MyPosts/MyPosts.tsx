import React from "react";
import { PostsType } from "../../../Redux/profile-reducer";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxlength, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControl/FormControl";


export type MyPostsType = {
    posts: PostsType[],
    addPostHandler: (message: string) => void,
}

export const MyPosts:React.FC<MyPostsType> = ({posts, addPostHandler}) => {
    const postElem = posts.map(p => <Posts massage={p.message} key={p.id} like={p.likeCount} id={p.id}/>)

    const addPost = (value: MyPostFormType) => {
        addPostHandler(value.MyPosts);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <MyPostsReduxForm onSubmit={addPost}/>
            <div className={classes.posts}>
                {postElem}
            </div>
        </div>
    )
}

type MyPostFormType = {
    MyPosts: string
}

const length =  maxlength(10);

const MyPostForm: React.FC<InjectedFormProps<MyPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field component={TextArea} name={"MyPosts"} validate={[requiredField,length]}/>
            </div>
            <button>Add post</button>
            <div>
                New posts
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm<MyPostFormType>({form: "MyPosts"})(MyPostForm);
