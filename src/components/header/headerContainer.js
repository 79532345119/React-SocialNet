import React from 'react';
import Header from './header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../data/auth-reducer';
import {authApi} from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        authApi()
        .then(data => {
            if (data.resultCode ===0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
    })
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);