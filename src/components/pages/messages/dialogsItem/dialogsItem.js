import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props)=>{
    const path = "/messages/"+props.id;

    return(
        <div className='dialogs__item'>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;