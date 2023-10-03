import React, {useContext} from "react"
import {Navigate} from "react-router-dom";
import StoreContext from "../../../store-context";


function withAuthNavigate(Component) {
    function ComponentWithAuthState(props) {
        const store = useContext(StoreContext)
        return <Component {...props} isAuth={store.getState().auth.isAuth}/>
    }
    class ComponentWithAuthNavigate extends React.Component {
       render() {
           if(!this.props.isAuth) return <Navigate to="/login/"/>
           return <ComponentWithAuthState />
       }
    }

    return ComponentWithAuthNavigate;
}
export default withAuthNavigate;