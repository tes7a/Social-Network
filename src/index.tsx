import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store, storeType} from './Redux/store'

const renderTree = () => {
    const state = store.gateState

    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(renderTree);
renderTree()