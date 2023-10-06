import {profileAPI} from "../api/samuraiAPI";

const ADD_POST = "ADD-POST";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"
const DELETE_POST = "DELETE_POST";
const profilePage = {
    postsData: [
        {id: 1, message: "Hi! I love you", likesCount: 15},
        {id: 2, message: "i really hate u!!!!!!!!!!!", likesCount: 20},
    ],
    profileInfo: null,
    status: '',
    isFetching: false,
};
const profilePageReducer = (state = profilePage, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsData.length + 1,
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
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
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo})
export const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const getProfileInfoRequest = (userId) => async (dispatch) => {
    dispatch(togglePreloader(true));
    const data = await profileAPI.getProfile(userId)
    dispatch(togglePreloader(false));
    dispatch(setProfileInfo(data));
};
export const getProfileStatusRequest = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setProfileStatus(data));
};
export const updateProfileStatusRequest = (status) => async (dispatch) => {
    await profileAPI.updateStatus(status)
    dispatch(setProfileStatus(status));
};
export default profilePageReducer;
