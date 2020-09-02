import React from 'react';
import './myPosts.css'
import Post from './post/post';




const MyPosts = (props)=> {

    let posts = props.posts.map(post=><Post message={post.message} like={post.likesCount}/>)
    
    let newPostElement = React.createRef();

   let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange = {onPostChange} 
                               ref = {newPostElement}
                               value = {props.newPostText}></textarea></div>
                <div><button onClick={onAddPost}>ADD POST</button></div>
            </div>
       
            <div className="newPost">
                {posts}
            </div>
        </div>
    
    )
}

export default MyPosts;