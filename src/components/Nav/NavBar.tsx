import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={ s.nav }>
            <div className={ s.item }>
                <NavLink to="/login" activeClassName={ s.activeLink }>Login</NavLink>
            </div>
            <div className={ s.item }>
                <NavLink to="/profile" activeClassName={ s.activeLink }>Profile</NavLink>
            </div>
            <div className={ s.item }>
                <NavLink to="/dialog" activeClassName={ s.activeLink }>Messages</NavLink>
            </div>
            <div className={ s.item }>
                <NavLink to="/news" activeClassName={ s.activeLink }>News</NavLink>
            </div>
            <div className={ s.item }>
                <NavLink to="/users" activeClassName={ s.activeLink }>Users</NavLink>
            </div>
            <div className={ s.item }>
                <NavLink to="/music" activeClassName={ s.activeLink }>Music</NavLink>
            </div>
            <div className={ s.item }>
                <NavLink to="/settings" activeClassName={ s.activeLink }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
