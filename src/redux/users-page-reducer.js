import {usersAPI} from "../api/samuraiAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";
const usersPage = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}
const usersPageReducer = (state = usersPage, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        u.followed = true;
                        return u
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        u.followed = false;
                        return u
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.numberOfPage
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const follow = (userID) => ({type: FOLLOW, userID});
export const unFollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});

export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setCurrentPage = (numberOfPage) => ({type: SET_CURRENT_PAGE, numberOfPage});
export const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId});
export const getUsers = (pageSize, currentPage) => (dispatch) => {
    dispatch(togglePreloader(true));
    usersAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(togglePreloader(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
}
export const makeFollow = (userId) => (dispatch) => {
    usersAPI.makeFollow(userId)
        .then(data => {
            if (data.resultCode === 0)
                dispatch(follow(userId));
            dispatch(toggleFollowingInProgress(false, userId));
        })
}
export const makeUnFollow = (userId) => (dispatch) => {
    usersAPI.makeUnFollow(userId)
        .then(data => {
            if (data.resultCode === 0)
                dispatch(unFollow(userId));
            dispatch(toggleFollowingInProgress(false, userId));
        })
}


export default usersPageReducer;