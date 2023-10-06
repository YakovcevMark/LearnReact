import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogs_page_reducer";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthNavigate} from "../Hocs/withAuthNavigateComponent/withAuthNavigate";
import withRouter from "../Hocs/WithRouterComponent/WithRouterFunction";

function DialogsClass(props) {
    return <Dialogs {...props} />
}

const mapStateToProps = state => {
    return {
        state: state.dialogsPage
    }
}
export default compose(
    connect(mapStateToProps, {addMessage}),
    withRouter,
    withAuthNavigate,
)(DialogsClass)
