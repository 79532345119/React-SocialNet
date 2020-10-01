import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = (props)=>{
    return(
        <header className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVBOvEYhBKycb7fFt36eBUcKFzyoOawQ6E0Q&usqp=CAU" alt='site logo is here'/>
            <div className="loginBlock">
                { props.isAuth 
                    ? <div>{props.login} * <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header