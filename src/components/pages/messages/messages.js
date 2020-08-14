import React from 'react';
import './messages.css'
import DialogsItem from './dialogsItem/dialogsItem';
import MessageItemsItem from './messagesItemItem/messagesItemItem';


const Messages = (props)=>{
    let dialogsElements = props.dialogs.map(dialog =><DialogsItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messages.map(message =><MessageItemsItem message={message.message}/>)
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