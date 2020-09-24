import React from 'react';
import Users from './users';
import {connect} from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers} from '../../data/users-reducer';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
/*         this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersQuantity(data.totalCount);          
        }) */
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
/*        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
        })*  */
    }
   
    render() {
        return  <div className = 'content'>       
            {this.props.isFetching ? <Preloader/> : null} 
        <Users 
            totalUsersQuantity = {this.props.totalUsersQuantity}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            users = {this.props.users}
            toggleIsFollowingInProgress = {this.props.toggleIsFollowingInProgress}
            isFollowingInProgress = {this.props.isFollowingInProgress}
            />
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

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingInProgress,
    getUsers
    })(UsersContainer);