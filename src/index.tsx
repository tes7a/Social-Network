import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {AppRootStateType, store} from './Redux/redux-store'
import {Provider} from "react-redux";
import {Store} from "redux";

const renderTree = (state: Store<AppRootStateType, any>) => {
    // const state = store.gateState

    ReactDOM.render(
        <Provider store={state}>
            <React.StrictMode>
                <App store={state}/>
            </React.StrictMode>,
        </Provider>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    renderTree(store);
})
renderTree(store);