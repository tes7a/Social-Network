import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import classes from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/dialog" render={() => <Dialogs/>}/>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

