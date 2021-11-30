import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import {Store} from "redux";
import {AppRootStateType} from "./Redux/redux-store";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

type AppType = {
    store: Store<AppRootStateType, any>,
}

const App: React.FC<AppType> = ({store}) => {

    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialog" render={() => <DialogsContainer/>}/>
                    <Route path="/profile" render={() => <Profile store={store}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

