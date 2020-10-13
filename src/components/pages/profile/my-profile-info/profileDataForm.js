import React from 'react';
import {reduxForm } from 'redux-form';
import {createField, Input, Textarea} from '../../../common/formsControls/formsControls'
import styles from '../../../common/formsControls/formsControls.module.css'


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form className='profileDataForm' onSubmit={handleSubmit}>
    <div><button>Save and Exit</button></div>
    {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
    <div className="userAboutItem"><b>Full name</b>: {createField('Full name', "fullName", [], Input)}</div>
    <div className="userAboutItem"><b>Looking for a job</b>: {createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}</div>
    <div className="userAboutItem"><b>My professional skills</b>: {createField('My professional skills', "lookingForAJobDescription", [], Textarea)}</div>
    <div className="userAboutItem"><b>About me</b>: {createField('About me', "aboutMe", [], Textarea)}</div>
   
    <div>
        <b>CONTACTS</b>: {Object.keys(profile.contacts).map(key => {
            return <div className="userContactsItem" key={key}> 
                <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
            </div>
        })}
    </div>
</form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;