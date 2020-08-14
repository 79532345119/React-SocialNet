import React from 'react';
import './myPosts.css'
import Post from './post/post';


const MyPosts = (props)=> {



    let posts = props.posts.map(post=><Post message={post.message} like={post.likesCount}/>)
    
    let newPostElement = React.createRef();

   let addPost = () => {
        
        props.dispatch({type: 'ADD-POST'});
        }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-TEXT-POST', newText: text});
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