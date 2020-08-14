import React from 'react';
import './myPosts.css'
import Post from './post/post';
import {addPostActionCreator} from './../../../../data/state';
import {updateNewPostActionCreator} from './../../../../data/state';


const MyPosts = (props)=> {



    let posts = props.posts.map(post=><Post message={post.message} like={post.likesCount}/>)
    
    let newPostElement = React.createRef();

   let addPost = () => {
        
        props.dispatch(addPostActionCreator());
        }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange = {onPostChange} 
                               ref = {newPostElement}
                               value = {props.newPostText}></textarea></div>
                <div><button onClick={addPost}>ADD POST</button></div>
            </div>
       
            <div className="newPost">
                {posts}
            </div>
        </div>
    
    )
}

export default MyPosts;