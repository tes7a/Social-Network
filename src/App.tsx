import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileConnectContainer from "./components/Profile/ProfileContainer";
import  HeaderContainer  from "./components/Header/HeaderContainer";
import { LoginContainer } from "./components/login/Login";
import { AppRootStateType } from "./Redux/redux-store";
import { compose } from "redux";
import { connect } from "react-redux";
import {initializeApp} from '../src/Redux/app-reducer'
import { Preloader } from "./components/common/Preloader/Preloader";

class App extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            console.log('loader')
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='appWrapper'>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Route exact path="/dialog" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileConnectContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

//export default App;


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    initialized: state.app.intialized,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp})
)(App);


type MapStateToPropsType = {
    initialized: boolean,
}
type HeaderContainerType = {
    initializeApp: () => void,
}

type HeaderContainerProps = MapStateToPropsType & HeaderContainerType