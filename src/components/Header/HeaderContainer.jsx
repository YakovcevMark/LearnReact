import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth_reducer";


function HeaderContainer({isAuth, login, logout}) {
    return <Header
        isAuth={isAuth}
        login={login}
        logout={logout}
    />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {logout})(HeaderContainer)
