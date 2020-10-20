const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: 
    [
        {'id':'1', 'message':'Hello world'},
        {'id':'2', 'message':'К сожалению сервер не поддерживает отправку и получение сообщений.'}, 
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