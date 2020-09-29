const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: 
    [
        {'id':'1', 'message':'Hello world'},
        {'id':'2', 'message':'This is second message'}, 
        {'id':'3', 'message':'This is third message'}, 
        {'id':'4', 'message':'I am realy cool!'},
        ], 
  
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
       
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {...state,
            messages: [...state.messages, {id: 6, message: body}],
        }

    default: 
        return state;
    }
}
export const sendMessageActionCreator = (newMessageBody)=> ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;