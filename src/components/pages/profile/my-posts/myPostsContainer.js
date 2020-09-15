import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../data/profile-reducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text)=>{
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: ()=> {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 

export default MyPostsContainer;