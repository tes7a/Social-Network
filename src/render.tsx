import {addPost, changeText, RootStateType} from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeText={changeText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}