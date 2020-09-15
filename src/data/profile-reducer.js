const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

let initialState = {
    posts: 
[
    {id:1, message:'Hi, this is first post from myPosts.js', likesCount: 0},
    {id:2, message:'Hi, this is second post from myPosts.js', likesCount: 0},
    {id:3, message:'YOOOOHOOO', likesCount: 0}
    ],
    newPostText: 'Some New Text'

};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText:''
            };

        }
        
        case UPDATE_NEW_TEXT_POST: {
            return {
                ...state,
                newPostText: action.newText}
            }
    default:
        return state;
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

export default profileReducer;