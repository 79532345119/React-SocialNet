import React from 'react';
import './post.css'

const Post = (props)=> {
    return (
        <div className="postItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFp3uCMFT-t3WKaunzc5iJMMNDiwDmz4q4CA&usqp=CAU" alt="чья-то ава"/>
        {props.message}
        <span> * like: {props.like} *</span>
        </div>
    )
}

export default Post;