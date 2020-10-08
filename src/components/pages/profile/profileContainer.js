import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus, savePhoto} from '../../../data/profile-reducer'
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = this.props.authorizedUserID;  /* 11633 */};
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render () {
        return (
            <Profile {...this.props} 
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

/* let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let ProfileContainerWithUrl = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithUrl); */