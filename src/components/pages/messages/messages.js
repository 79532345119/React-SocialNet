import React from 'react';
import './messages.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props)=>{
    const path = "/messages/"+props.id;
    return(
        <div className='dialogs__item'>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItemsItem = (props)=>{
    return(
        <div className='message__items__item'>{props.message}</div>
    )
}
let dialogs =   [{'id':'1', 'name':'Anna'},
                    {'id':'2', 'name':'Boris'}, 
                    {'id':'3', 'name':'Charlie'}, 
                    {'id':'4', 'name':'Dima'}, 
                    {'id':'5', 'name':'Eva'}];

let messages = [{'id':'1', 'message':'Hello world'},
                    {'id':'2', 'message':'This is second message'},
                    {'id':'3', 'message':'This is third message'},
                    {'id':'4', 'message':'I am realy cool!'},];

let dialogsElements = dialogs.map(dialog =><DialogsItem name={dialog.name} id={dialog.id} />);
let messagesElements = messages.map(message =><MessageItemsItem message={message.message}/>)

const Messages = ()=>{
    return (
        <div className="messages">
            <div className='dialogs'>
                {dialogsElements}
            </div>
            <div className='message__items'>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;