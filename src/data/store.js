import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


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
                this._state.profilePage = profileReducer(this._state.profilePage, action);
                this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

                this._callSubscriber(this._state);
        } 
}



export default store;