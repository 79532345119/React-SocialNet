import React from 'react';
import Users from './users';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersQuantityAC } from '../../data/users-reducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {

    getUsers = ()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        //https://social-network.samuraijs.com/api/1.0/users?page=99&count=2
        .then(response => {this.props.setUsers(response.data.items);
                           this.props.setTotalUsersQuantity(response.data.totalCount);          
        })
/*         if (this.props.users.length === 0) {
            this.props.setUsers([
                {id: 1, photoUrl: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg', followed: false, fullName: 'Alex', status: 'boss', location: {city: 'Moskow', country: 'Russia'} },
                {id: 2, photoUrl: 'https://g0.sunmag.me/sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png', followed: true, fullName: 'Boris', status: 'second boss', location: {city: 'Kiev', country: 'Ukraine'} },
                {id: 3, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2018/10/spartan.png', followed: false, fullName: 'Charlie', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'} }
            ])
        }  */
    }

    componentDidMount() {
        this.getUsers();
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.getUsers();
            this.props.setTotalUsersQuantity(response.data.totalCount);
        })
    }
   
    render() {
        return <Users 
            totalUsersQuantity = {this.props.totalUsersQuantity}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            users = {this.props.users}


        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);