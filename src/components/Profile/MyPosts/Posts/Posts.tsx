import React from 'react';
import s from './Posts.module.css';

type PostsMassageLike = {
    massage : string,
    like : number,
    id: number,
}

const Posts: React.FC<PostsMassageLike> = ({ like, massage }) => {
    return(
            <div className={ s.item }>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/3884.jpg"/>
                {massage}
                <div>
                <span>Like {like} </span>
                </div>
            </div>
    )
}

export default Posts;
