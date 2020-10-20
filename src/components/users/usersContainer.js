import React from 'react';
import Users from './users';
import {connect} from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers} from '../../data/users-reducer';
import Preloader from '../common/preloader/preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize) 
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    
    render() {
        return  <div className = 'content'>       
            {this.props.isFetching ? <Preloader/> : null} 
        {this.props.isShowFollowed 
        ? <Users
            totalUsersQuantity = {this.props.totalUsersQuantity}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            users = {this.props.users.filter(u=>u.followed === true)}
            isFollowingInProgress = {this.props.isFollowingInProgress}
        />
        : <Users 
            totalUsersQuantity = {this.props.totalUsersQuantity}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            users = {this.props.users}
            isFollowingInProgress = {this.props.isFollowingInProgress}
            /> }
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersQuantity: state.usersPage.totalUsersQuantity,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersQuantity: (totalQuantity) => {
            dispatch(setTotalUsersQuantityAC(totalQuantity))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
*/


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers}),
    withAuthRedirect
)(UsersContainer)

/* export default withAuthRedirect(connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingInProgress,
    getUsers
    })(UsersContainer)); */