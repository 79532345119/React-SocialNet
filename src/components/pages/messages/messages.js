import React from 'react';
import './messages.css'
import DialogsItem from './dialogsItem/dialogsItem';
import MessageItemsItem from './messagesItemItem/messagesItemItem';


const Messages = (props)=>{
    let dialogsElements = props.dialogs.map(dialog =><DialogsItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messages.map(message =><MessageItemsItem message={message.message}/>)
    let onSendMessageClick = () =>{

    }
    return (
        <div className="messages">
            <div className='dialogs'>
                {dialogsElements}
            </div>
            <div className='message__items'>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder="Enter your message here"></textarea></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    )
}

export default Messages;