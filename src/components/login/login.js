import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from '../../utils/validators/validators'
import { connect } from 'react-redux';
import {login} from '../../data/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/formsControls/formsControls.module.css'
import {createField, Input, Textarea} from '../common/formsControls/formsControls'


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} type='email' validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'} validate={[required]}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>

            {captchaUrl && <img src={captchaUrl} alt='Captcha'/> }
            {captchaUrl && createField('Enter symbols', "captcha", [required], Input)}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {return <Redirect to ={'/profile'}/>}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
} 

const mapStateToProps = (state) => ( {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
