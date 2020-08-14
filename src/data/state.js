const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
        _state: {
                profilePage: {
                        posts: 
                    [
                        {id:1, message:'Hi, this is first post from myPosts.js', likesCount: 0},
                        {id:2, message:'Hi, this is second post from myPosts.js', likesCount: 0},
                        {id:3, message:'YOOOOHOOO', likesCount: 0}
                        ],
                        newPostText: 'Some New Text'
        
                },
        
                messagesPage: {
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
        
                },
        
                },
        _callSubscriber() {
                console.log('state changed');
        },

        getState() {
                return this._state;
        },
        subscribe(observer) {
                this._callSubscriber = observer;
        },


        dispatch(action) {
                if(action.type ===ADD_POST) {
                        let newPost = {
                                id: 5,
                                message: this._state.profilePage.newPostText,
                                likesCount: 0
                            }
                            this._state.profilePage.posts.push(newPost);
                            this._state.profilePage.newPostText = '';
                            this._callSubscriber(this._state);
                }else if(action.type===UPDATE_NEW_TEXT_POST) {
                        this._state.profilePage.newPostText = action.newText;
                        this._callSubscriber(this._state);
                }else if(action.type===UPDATE_NEW_MESSAGE_BODY) {
                        this._state.messagesPage.newMessageBody = action.body;
                        this._callSubscriber(this._state);
                }else if(action.type===SEND_MESSAGE) {
                        let body = this._state.messagesPage.newMessageBody;
                        this._state.messagesPage.messages.push({id: 6, message: body});
                        this._callSubscriber(this._state);
                }

        } 
}

export const addPostActionCreator = ()=>{
        return {
            type: 'ADD-POST'
        }
    }
export const updateNewPostActionCreator = (text) =>{
        return (
            {type:'UPDATE-NEW-TEXT-POST',
            newText: text
            }
        )
    }
export const sendMessageActionCreator = ()=> ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default store;