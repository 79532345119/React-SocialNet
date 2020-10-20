import React from 'react';
import './post.css'

const Post = (props)=> {
    return (
        <div className="postItem">
            {props.message}
        </div>
    )
}

export default Post;