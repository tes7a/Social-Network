import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import {RootStateType, store, storeType} from './Redux/store'
import {Store} from "redux";
import {AppRootStateType} from "./Redux/redux-store";

type AppType = {
    store: Store<AppRootStateType, any>
}

const App: React.FC<AppType> = ({store}) => {
    const state = store.getState()

    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialog" render={() => <Dialogs state={state.dialogsPage} dispatch={store.dispatch.bind(store)}
                                                                       newDialog={state.dialogsPage.newMessageBody}/>}/>
                    <Route path="/profile" render={() => <Profile state={state.profilePage}
                                                                  dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

