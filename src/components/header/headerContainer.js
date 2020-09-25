import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import {authorizeMe} from '../../data/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authorizeMe()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {authorizeMe})(HeaderContainer);