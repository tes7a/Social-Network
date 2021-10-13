import {addPost, changeText, RootStateType, state, subscribe} from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeText={changeText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


subscribe(renderTree);
renderTree()