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
                if(action.type ==='ADD-POST') {
                        let newPost = {
                                id: 5,
                                message: this._state.profilePage.newPostText,
                                likesCount: 0
                            }
                            this._state.profilePage.posts.push(newPost);
                            this._state.profilePage.newPostText = '';
                            this._callSubscriber(this._state);
                }else if(action.type==='UPDATE-NEW-TEXT-POST') {
                        this._state.profilePage.newPostText = action.newText;
                        this._callSubscriber(this._state);
                }

        } 
}

export let addPostActionCreator = ()=>{
        return {
            type: 'ADD-POST'
        }
    }
export let updateNewPostActionCreator = (text) =>{
        return (
            {type:'UPDATE-NEW-TEXT-POST',
            newText: text
            }
        )
    }

export default store;