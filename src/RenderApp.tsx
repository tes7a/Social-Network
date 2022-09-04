import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import App from './App';
import { AppRootStateType } from './Redux/redux-store';

type RenderAppType = {
    state: Store<AppRootStateType, any>,
}

export const RenderApp: React.FC<RenderAppType> = ({ state }) => {
    return <BrowserRouter>
        <Provider store={state}>
             <App />
        </Provider>
    </BrowserRouter>;
};
