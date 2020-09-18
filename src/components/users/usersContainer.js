import React from 'react';
import Users from './users';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersQuantityAC } from '../../data/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersQuantity: state.usersPage.totalUsersQuantity,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);