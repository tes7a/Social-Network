import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store, storeType} from './Redux/store'

type propsType = {
    store: storeType
}

const renderTree = () => {
    const state = store.gateState

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost} changeText={store.changeText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(renderTree);
renderTree()