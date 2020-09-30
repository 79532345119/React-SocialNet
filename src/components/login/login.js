import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../common/formsControls/formsControls'
import {required} from '../../utils/validators/validators'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} type='email' validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const onSubmit = (formData) => {
    console.log(formData)
}
const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
} 

export default Login;
