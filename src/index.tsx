import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRootStateType, store } from './Redux/redux-store'
import { Store } from 'redux';
import { RenderApp } from './RenderApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const renderTree = (state: Store<AppRootStateType, any>) => {

    root.render( <RenderApp state={ state }/> );
}

store.subscribe(() => {
    renderTree(store);
})

renderTree(store);