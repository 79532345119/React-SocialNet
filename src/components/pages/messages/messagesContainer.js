import React from 'react';
import './messages.css'
import Messages from './messages';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../../data/dialogs-reducer';


const MessagesContainer = (props)=>{

    let state = props.store.getState().messagesPage;
    
    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageActionCreator());
    }
    
    let onNewMessageChange = (body) =>{
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }
    

    return (
        <Messages  updateNewMessageBody={onNewMessageChange} 
                   sendMessage={onSendMessageClick} 
                   messagesPage={state} />
    )
}

export default MessagesContainer;