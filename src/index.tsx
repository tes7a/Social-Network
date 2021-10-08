import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type TypeDialog = {
    name: string
    id: number
}

export type MessagesType = {
    id: number,
    message: string
}

export type PostsType = {
    id: number,
    likeCount: number,
    message: string
}

let posts: PostsType[] = [
    {id: 1, likeCount: 15, message: "Hi, how are you?"},
    {id: 2, likeCount: 20, message: "It's my first post"}
]

let dialogs: TypeDialog[] = [
    {id: 1, name: "Kostya"},
    {id: 2, name: "Tanya"},
    {id: 3, name: "Igor"},
    {id: 4, name: "Max"},
    {id: 5, name: "Rada"},
    {id: 6, name: "Ruslan"},
    {id: 7, name: "Karlitsa"}
]

let messages: MessagesType[] = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Yo"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "Gl"},
    {id: 5, message: "Thx"}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
