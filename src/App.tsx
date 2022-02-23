import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileConnectContainer from "./components/Profile/ProfileContainer";
import  HeaderContainer  from "./components/Header/HeaderContainer";
import { Login } from "./components/login/Login";

const App= () => {

    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialog" render={() => <DialogsContainer />}/>
                    <Route path="/profile/:userId?" render={() => <ProfileConnectContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

