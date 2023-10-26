import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profile_page_reducer";
import dialogsPageReducer from "./dialogs_page_reducer";
import sidebarPageReducer from "./sidebar_page_reducer";
import users_page_reducer from "./users_page_reducer";
import autReducer from "./auth_reducer";
import thunk from 'redux-thunk';
import app_reducer from "./app_reducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: users_page_reducer,
    sidebar: sidebarPageReducer,
    auth: autReducer,
    app: app_reducer,

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;