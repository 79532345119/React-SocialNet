const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: 
    [
        {'id':'1', 'message':'Hello world'},
        {'id':'2', 'message':'This is second message'}, 
        {'id':'3', 'message':'This is third message'}, 
        {'id':'4', 'message':'I am realy cool!'},
        ], 
    newMessageBody: '',

    dialogs: 
    [
         {'id':'1', 'name':'Anna'},
         {'id':'2', 'name':'Boris'}, 
         {'id':'3', 'name':'Charlie'}, 
         {'id':'4', 'name':'Dima'}, 
         {'id':'5', 'name':'Eva'}
         ], 

};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
        
    case SEND_MESSAGE: 
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, message: body});

        return state;

    default: 
        return state;
    }
}
export const sendMessageActionCreator = ()=> ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;