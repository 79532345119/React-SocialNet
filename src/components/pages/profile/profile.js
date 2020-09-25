import React from 'react';
import './profile.css'
import ProfileInfo from './my-profile-info/profileInfo';
import MyPostsContainer from './my-posts/myPostsContainer';
import { Redirect } from 'react-router-dom';

const Profile = (props)=>{

    if (!props.isAuth) return <Redirect to={'/login'} />

    return(
        <div className='content'>

            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store={props.store} />

        </div>
    )
}

export default Profile;