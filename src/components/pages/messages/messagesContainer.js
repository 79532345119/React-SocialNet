import './messages.css';
import Messages from './messages';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../../data/dialogs-reducer';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import { compose } from 'redux';


let mapStateToProps = (state)=>{
    return {
        messagesPage: state.messagesPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

/* let AuthRedirectComponent = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default MessagesContainer; */