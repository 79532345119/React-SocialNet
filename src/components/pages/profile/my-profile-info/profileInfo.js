import React, { useState } from 'react';
import './profileInfo.css';
import Preloader from '../../../common/preloader/preloader';
import ProfileStatus from './profileStatus';
import ProfileDataForm from './profileDataForm';


const ProfileInfo = (props)=>{

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
            }
        }
    const onSubmit = (formData) => {
            props.saveProfile(formData).then(()=>{setEditMode(false)})
        }

    return(

    <div className="profileInfo">

        <div className="mainUserPhoto"><img src={props.profile.photos.large 
                ? props.profile.photos.large 
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR01mUdp62kN2vyu7FWyXLNKdhJSrjnnHsdfQ&usqp=CAU"alt="my profile logo'} alt="users logo if any" /> 
        
            {props.isOwner && <input className='savePhoto' type={'file'} onChange={onMainPhotoSelected}/>}
        </div>

        <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} isOwner = {props.isOwner}/>

        {editMode 
            ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit = {onSubmit}/> 
            : <ProfileData goToEditMode={()=> {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner} /> }
    </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
     return <div className="userContactsItem"><b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    const contacts = profile.contacts;
    return <div className='profileData'>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div className="userAbout">
            <div className="userAboutItemName">{profile.fullName}</div>
            <div className="userAboutItemHeading">About me:</div>
            <div className="userAboutItem">{profile.aboutMe}</div>
            <div className="userAboutItem">{profile.lookingForAJob ? 'Looking for a job' : '' }</div>
            <div className="userAboutItem">{profile.lookingForAJobDescription}</div>
        </div>
        <div className='contacts'>
            <b>CONTACTS</b>: {Object.keys(contacts).map(key => {
                return <Contact key={key} contactTitle = {key} contactValue={contacts[key]} />
            })}
        </div>
    </div>
}



export default ProfileInfo;


