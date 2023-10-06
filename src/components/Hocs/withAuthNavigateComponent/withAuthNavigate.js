import React from "react"
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthNavigate = (Component) => {
    const ComponentWithAuthNavigate = (props) => {
        if(!props.isAuth && !props.router.params.userId) return <Navigate to="/login/"/>
        return <Component {...props}/>
    }
    return connect(mapStateToProps,null)(ComponentWithAuthNavigate);
}

