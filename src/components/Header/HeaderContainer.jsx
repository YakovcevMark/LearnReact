import React, {useContext} from 'react';
import Header from "./Header";
import StoreContext from "../../store-context";
import {getAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            {...this.props}
        />
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
