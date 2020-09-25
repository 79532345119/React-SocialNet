import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../../data/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 11633};
        this.props.getUserProfile(userId)
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithUrl);