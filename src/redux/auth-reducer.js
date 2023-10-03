import {authAPI} from "../api/samuraiAPI";

const SET_AUTH_USER_INFO = "SET_AUTH_USER_INFO"
const initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
}
const autReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_USER_INFO:
            return { ...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}
export const setAuthUserData = (data) => ({type: SET_AUTH_USER_INFO, data})
export const getAuthUserData = () => (dispatch) => {
    authAPI.authorization()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({...data.data}));
            }
        })
}
export const login = (data) => (dispatch) => {
    authAPI.login({...data})
        .then(() => getAuthUserData())
}
export default autReducer;