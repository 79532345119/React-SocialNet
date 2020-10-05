import {profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: 
[
    {id:1, message:'Hi, this is first post from myPosts.js', likesCount: 0},
    {id:2, message:'Hi, this is second post from myPosts.js', likesCount: 0},
    {id:3, message:'YOOOOHOOO', likesCount: 0}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText:''
            };
        }
        
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
    default:
        return state;
    }
}
export const addPostActionCreator = (newPostText)=>{
    return {
        type: ADD_POST, newPostText
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile =(userId) => {
    return async (dispatch)=>{
        let data = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(data));                
    }
}

export const getStatus =(userId) => {
    return async (dispatch)=>{
        let data = await profileAPI.getStatus(userId)
            dispatch(setStatus(data));                
    }
}

export const updateStatus =(status) => {
    return async (dispatch)=>{
        let data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    }
}

export default profileReducer;
