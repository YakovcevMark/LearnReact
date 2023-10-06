import {authAPI} from "../api/samuraiAPI";

const SET_AUTH_USER_INFO = "SET_AUTH_USER_INFO"
const CLOSE_USER_SESSION = "CLOSE_USER_SESSION";
const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}
const autReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_INFO:
            return {...state, ...action.data, isAuth: true}
        case CLOSE_USER_SESSION:
            return {
                ...state,
                email: null,
                id: null,
                login: null,
                isAuth: false,
            }
        default:
            return state;
    }
}
export const setAuthUserData = (data) => ({type: SET_AUTH_USER_INFO, data});

export const CloseUserSession = () => ({type: CLOSE_USER_SESSION});

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.authorization();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData({...data.data}));
    }
}
export const login = (data, setErrors) => async (dispatch) => {
    const resp = await authAPI.login({...data});
    if (resp.resultCode !== 0)
        setErrors({apiError: resp.messages[0]});
    else {
        dispatch(getAuthUserData());
    }
}
export const logout = () => async (dispatch) => {
    await authAPI.logout();
    dispatch(CloseUserSession());
}
export default autReducer;