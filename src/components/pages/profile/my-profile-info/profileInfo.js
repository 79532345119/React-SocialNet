import React from 'react';
import './profileInfo.css';
import Preloader from '../../../common/preloader/preloader';
import ProfileStatus from './profileStatus';



const ProfileInfo = (props)=>{
    if (!props.profile) {
        return <Preloader/>
    }

    const contacts = props.profile.contacts;

    return(
    <div className="profileInfo">

        <div className="userPhoto"><img src={props.profile.photos.large ? props.profile.photos.large : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR01mUdp62kN2vyu7FWyXLNKdhJSrjnnHsdfQ&usqp=CAU"alt="my profile logo'} alt="users logo if any" /> </div>
        <div className="userAbout">
            <div className="userAboutItemName">{props.profile.fullName}</div>
            <div className="userAboutItemHeading">About me:</div>
            <div className="userAboutItem">{props.profile.aboutMe}</div>
            <div className="userAboutItem">{props.profile.lookingForAJob ? 'Looling for a job' : '' }</div>
            <div className="userAboutItem">{props.profile.lookingForAJobDescription}</div>
        </div>
        <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
        <ul className="userContacts"> Contacts:
            <li className="userContactsItem">facebook: {contacts.facebook}</li>
            <li className="userContactsItem">website: {contacts.website}</li>
            <li className="userContactsItem">vk: {contacts.vk}</li>
            <li className="userContactsItem">twitter: {contacts.twitter}</li>
            <li className="userContactsItem">instagram: {contacts.instagram}</li>
            <li className="userContactsItem">github: {contacts.github}</li>
        </ul>

        {/* Хорошая ава с медведем <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR01mUdp62kN2vyu7FWyXLNKdhJSrjnnHsdfQ&usqp=CAU"alt="my profile logo"/> */}
    </div>
    )
}

export default ProfileInfo;


