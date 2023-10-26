import './App.css';
import React, {lazy, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux-store";
import Login from "./components/common/login/Login";
import {withSuspense} from "./components/Hocs/withSuspense/withSuspense";

const DialogsContainer = withSuspense(lazy(() => import("./components/Dialogs/DialogsContainer")))
const UsersContainer =  withSuspense(lazy(() => import("./components/Users/UsersContainer")))
const ProfileContainer =  withSuspense(lazy(() => import("./components/Profile/ProfileContainer")))
const App = ({initializeApp, initialized}) => {

    useEffect(() => {
        initializeApp();
    }, [initializeApp])

    if (!initialized) return <Preloader/>
    return (<BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>);
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized,
    }
}
const AppContainer = compose(
    connect(mapStateToProps, {initializeApp}))
(App);
const SamuraiJSApp = (props) => {
    return (
        <Provider store={store}>

            <AppContainer/>
        </Provider>
    )
}
export default SamuraiJSApp;