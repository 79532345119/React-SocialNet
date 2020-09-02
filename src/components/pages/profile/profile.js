import React from 'react';
import './profile.css'
import MyProfileInfo from './my-profile-info/myProfileInfo';
import MyPostsContainer from './my-posts/myPostsContainer';

const Profile = (props)=>{



    return(
        <div className='content'>
            <div className='mainImg'>
                 <img src="https://www.smartertravel.com/uploads/2020/03/ST_ZoomBackground_City02.jpg"/>
            </div>
            <MyProfileInfo/>
            <MyPostsContainer store={props.store} />

        </div>
    )
}

export default Profile;