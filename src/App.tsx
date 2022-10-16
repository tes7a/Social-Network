import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import {  Route, Switch } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import  HeaderContainer  from './components/Header/HeaderContainer';
import { LoginContainer } from './components/Login/Login';
import { AppRootStateType } from './bll/redux-store';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initializeApp} from './bll/app-reducer'
import { Preloader } from './components/common/Preloader/Preloader';
import { SuspenseHoc } from './hoc/SuspenseHoc';
import { NotFound } from './components/404/NotFound';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileConnectContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
                <div className='appWrapper'>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/dialog' render={SuspenseHoc(DialogsContainer) } />
                            <Route path='/profile/:userId?' render={SuspenseHoc(ProfileConnectContainer)}/>
                            <Route path='/news' render={ () => <News/> }/>
                            <Route path='/music' render={ () => <Music/> }/>
                            <Route path='/settings' render={ () => <Settings/> }/>
                            <Route path='/users' render={ () => <UsersContainer/> }/>
                            <Route path='/login' render={ () => <LoginContainer/> }/>
                            <Route path='/*' render={ () => <NotFound/> }/>
                        </Switch>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { initializeApp })
)(App);


type MapStateToPropsType = {
    initialized: boolean,
}
type HeaderContainerType = {
    initializeApp: () => void,
}

type HeaderContainerProps = MapStateToPropsType & HeaderContainerType