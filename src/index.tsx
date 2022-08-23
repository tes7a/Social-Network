import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {AppRootStateType, store} from './Redux/redux-store'
import {Provider} from "react-redux";
import {Store} from "redux";

const renderTree = (state: Store<AppRootStateType, any>) => {

    ReactDOM.render(
        <Provider store={state}>
                <App/>
        </Provider>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    renderTree(store);
})
renderTree(store);