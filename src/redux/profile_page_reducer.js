import {profileAPI} from "../api/samuraiAPI";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"
const profilePage = {
    postsData: [
        {id: 1, message: "Hi! I love you", likesCount: 15},
        {id: 2, message: "i really hate u!!!!!!!!!!!", likesCount: 20},
    ],
    newPostText: '',
    profileInfo: null,
    status: '',
    isFetching: false,
};
const profilePageReducer = (state = profilePage, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: {
                    ...action.profileInfo
                }
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}
export const addPost = () => ({type: ADD_POST})
export const updatePostText = (newText) =>
    ({type: UPDATE_POST_TEXT, newText: newText})
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo})
export const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const getProfileInfo = (userId) => (dispatch) => {
    dispatch(togglePreloader(true));
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(togglePreloader(false));
            dispatch(setProfileInfo(data));
        })
};
export const getProfileStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setProfileStatus(data));
        })
};
export const updateProfileStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(() => dispatch(setProfileStatus(status)));
};
export default profilePageReducer;
