import React from 'react';
import './myPosts.css'
import Post from './post/post';

const MyPosts = ()=> {

    let postData =[{id:1, message:'Hi, this is first post from myPosts.js', likesCount: 0},
                   {id:2, message:'Hi, this is second post from myPosts.js', likesCount: 0},
                   {id:3, message:'YOOOO', likesCount: 0}];

    let posts = postData.map(post=><Post message={post.message} like={post.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>ADD POST</button></div>
            </div>
       
            <div className="newPost">
                {posts}
            </div>
        </div>
    
    )
}

export default MyPosts;