
import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersQuantity: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
    };

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SETUSERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersQuantity: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching:action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {...state, 
                isFollowingInProgress: action.isFetching
                ? [...state.isFollowingInProgress, action.userId]
                : state.isFollowingInProgress.filter(id => id !== action.userId) }
        }

        default:
            return state;
    }
}

export const followSuccess = (userId)=> ({type: FOLLOW, userId})

export const unfollowSuccess = (userId)=> ({type: UNFOLLOW, userId})

export const setUsers = (users)=> ({type: SETUSERS, users})

export const setCurrentPage = (currentPage)=> ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersQuantity = (totalUsersQuantity) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersQuantity})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleIsFollowingInProgress = (isFetching, userId) =>({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId})



export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersQuantity(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
        if (data.resultCode === 0) {dispatch(actionCreator(userId))};
        dispatch(toggleIsFollowingInProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.followUser.bind(usersAPI)
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
    }
}

/* export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId))
        let data = usersAPI.unfollowUser(userId)
            if (data.resultCode === 0) {dispatch(unfollowSuccess(userId))};
            dispatch(toggleIsFollowingInProgress(false, userId));
    }
} */

export default usersReducer;