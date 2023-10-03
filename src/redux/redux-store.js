import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profile_page_reducer";
import dialogsPageReducer from "./dialogs_page_reducer";
import sidebarPageReducer from "./sidebar_page_reducer";
import usersPageReducer from "./users-page-reducer";
import autReducer from "./auth-reducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    sidebar: sidebarPageReducer,
    auth: autReducer,

});
let store = createStore(reducers, applyMiddleware(thunk));
export default store;