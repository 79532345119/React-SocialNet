import React from 'react';
import './profile.css'
import ProfileInfo from './my-profile-info/profileInfo';
import MyPostsContainer from './my-posts/myPostsContainer';


const Profile = (props)=>{
    return(
        <div className='content'>

            <ProfileInfo profile={props.profile} status={props.status} 
                         updateStatus={props.updateStatus} 
                         savePhoto={props.savePhoto} 
                         isOwner={props.isOwner}
                         saveProfile={props.saveProfile}
                         />
            <MyPostsContainer store={props.store} />

        </div>
    )
}

export default Profile;