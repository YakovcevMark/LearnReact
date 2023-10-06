import './App.css';
import React, {useEffect} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/common/FormControls/LoginForm";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";

const App = (props) => {

    useEffect(() => {
        props.initializeApp();
    }, [initializeApp])

    if (!props.initialized) return <Preloader/>
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
                    <Route path="/login" element={<LoginForm/>}/>
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
export default compose(
    connect(mapStateToProps, {initializeApp}))
(App);
