import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './myPosts.css'
import Post from './post/post';
import {required, maxLengthCreator} from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/formsControls/formsControls'

const maxLength30 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='newPostText' 
               placeholder='What are you thinking about?' validate={[required, maxLength30]}/>
        <div><button>ADD POST</button></div>
    </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

/* class MyPosts extends PureComponent { - сразу включает в себя метод shpuldComponentUpdate()

   
    render() {
           
        console.log('render')
    let posts = this.props.posts.map(post=><Post key={post.id} message={post.message} like={post.likesCount}/>)
    
    const onAddPost = (values) => {
        this.props.addPost(values.newPostText)
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
} */

const MyPosts = (props) => {
    console.log('render')
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