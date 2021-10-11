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
import {changeText, RootStateType} from './Redux/State'

type AppType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    changeText: (newText: string) => void
}

const App: React.FC<AppType> = ({state, addPost, changeText}) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialog" render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile state={state.profilePage} addPost={addPost} changeText={changeText}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

