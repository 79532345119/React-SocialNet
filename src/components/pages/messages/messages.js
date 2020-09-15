import React from 'react';
import './messages.css'
import DialogsItem from './dialogsItem/dialogsItem';
import MessageItemsItem from './messagesItemItem/messagesItemItem';


const Messages = (props)=>{

    let state = props.messagesPage;
    
    let dialogsElements = state.dialogs.map(dialog =><DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message =><MessageItemsItem key={message.id} message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();
    }
    let onNewMessageChange = (event) =>{
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className="messages">
            <div className='dialogs'>
                {dialogsElements}
            </div>
            <div className='message__items'>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value = {newMessageBody} 
                    onChange={onNewMessageChange}
                    placeholder="Enter your message here"></textarea></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    )
}

export default Messages;