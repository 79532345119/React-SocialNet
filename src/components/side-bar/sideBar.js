import React from 'react';
import './sideBar.css'
import { NavLink } from 'react-router-dom';

const SideBar = ()=> {
    return (
        <nav className="sideBar">
            <div className="sideBar__item">
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className="sideBar__item">
                <NavLink to="/messages">Messages</NavLink>
            </div>
            <div className="sideBar__item">
                <NavLink to="/myFriends">My friends</NavLink></div>
            <div className="sideBar__item">
                <NavLink to="/music">Music</NavLink></div>
            <div className="sideBar__item">
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className="sideBar__item">
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    )
}

export default SideBar;