import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './myPosts.css'
import Post from './post/post';

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <Field component='textarea' name='newPostText' placeholder='What are you thinking about?'/>
        <div><button>ADD POST</button></div>
    </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props)=> {

    let posts = props.posts.map(post=><Post key={post.id} message={post.message} like={post.likesCount}/>)
    
    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    
    return (
        <div>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
       
            <div className="newPost">
                {posts}
            </div>
        </div>
    
    )
}


export default MyPosts;