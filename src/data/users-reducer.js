
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersQuantity: 0,
    currentPage: 1,
    isFetching: true
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
        default:
            return state;
    }
}

export const followAC = (userId)=> ({type: FOLLOW, userId})

export const unfollowAC = (userId)=> ({type: UNFOLLOW, userId})

export const setUsersAC = (users)=> ({type: SETUSERS, users})

export const setCurrentPageAC = (currentPage)=> ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersQuantityAC = (totalUsersQuantity) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersQuantity})

export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;