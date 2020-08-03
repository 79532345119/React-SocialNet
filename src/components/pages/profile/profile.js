import React from 'react';
import './profile.css'
import MyPosts from './my-posts/myPosts';
import MyProfileInfo from './my-profile-info/myProfileInfo';

const Profile = ()=>{
    return(
        <div className='content'>
            <div>
                 <img src="https://www.smartertravel.com/uploads/2020/03/ST_ZoomBackground_City02.jpg"/>
            </div>
            <MyProfileInfo/>
            <MyPosts/>

        </div>
    )
}

export default Profile;