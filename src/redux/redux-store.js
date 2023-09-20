import {combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profile_page_reducer";
import dialogsPageReducer from "./dialogs_page_reducer";
import sidebarPageReducer from "./sidebar_page_reducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarPageReducer,
});
let store = createStore(reducers);
export default store;