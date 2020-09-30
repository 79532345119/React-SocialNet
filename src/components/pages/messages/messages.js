import React from 'react';
import './messages.css'
import DialogsItem from './dialogsItem/dialogsItem';
import MessageItemsItem from './messagesItemItem/messagesItemItem';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../../common/formsControls/formsControls';
import {required, maxLengthCreator} from '../../../utils/validators/validators';



const Messages = (props)=>{

    let state = props.messagesPage;
    
    let dialogsElements = state.dialogs.map(dialog =><DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message =><MessageItemsItem key={message.id} message={message.message}/>);


    if (!props.isAuth) return <Redirect to={'/login'} />

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className="messages">
            <div className='dialogs'>
                {dialogsElements}
            </div>
            <div className='message__items'>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit = {addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field  component={Textarea} name='newMessageBody' 
                    placeholder='Enter your message here' validate={[required, maxLength50]}/>
        <div><button>SEND</button></div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Messages;