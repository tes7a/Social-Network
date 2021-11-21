import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from './Redux/redux-store'
import {Provider} from "react-redux";

const renderTree = () => {
    // const state = store.gateState

    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <App store={store}/>
            </React.StrictMode>,
        </Provider>,
    document.getElementById('root')
)
    ;
}

store.subscribe(() => {
    let state = store.getState()
    renderTree(state);
})