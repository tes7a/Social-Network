import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Profile/Profile";


const App = () => {
  return (
      <div className='appWrapper'>
        <Header/>
        <NavBar/>
        <Profile/>
      </div>
  );
}

export default App;

