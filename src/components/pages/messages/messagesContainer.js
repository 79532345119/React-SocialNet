import React from 'react';
import './messages.css'
import Messages from './messages';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../../data/dialogs-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state)=>{
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewMessageBody: (body)=> {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: ()=> {
            dispatch(sendMessageActionCreator());
        }
    }

}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;