import { stopSubmit } from 'redux-form';
import {authAPI, securityAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId:  null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: 
            return {
                ...state,
                ...action.data,
               };

    default:
        return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} });

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}})

export const authorizeMe = () => 
    async (dispatch) => {
        let data = await authAPI.me();
            if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
            } 
    }


export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)
            if (data.resultCode === 0) {
                dispatch(authorizeMe())
            }
            else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptchaUrl()
        const captchaUrl = data.url
                dispatch(getCaptchaUrlSuccess(captchaUrl))
            
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }
}

export default authReducer;
