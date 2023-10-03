import Dialogs from "./Dialogs";

import {addMessage, updateMessageText} from "../../redux/dialogs_page_reducer";
import React, {useContext} from "react";
import StoreContext from "../../store-context";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import withAuthNavigate from "../Hocs/withAuthNavigateComponent/withAuthNavigate";

class DialogsClass extends React.Component {
    render() {
        return <Dialogs {...this.props} />
    }
}

// const DialogsContainer = (props) => {
//     const store = useContext(StoreContext);
//     const onAddMessage = () => {
//         store.dispatch(addMessageActionCreator())
//
//     }
//     const onUpdateMessageText = (newText) => {
//         store.dispatch(updateMessageTextActionCreator(newText))
//     }
//
//     return (
//         <DialogsClass
//             addMessage={onAddMessage}
//             updateMessageText={onUpdateMessageText}
//             state={store.getState().dialogsPage}
//         />
//     )
// }
// withAuthNavigate(DialogsContainer)
const mapStateToProps = state => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addMessage: () => {
            dispatch(addMessage())
        },
        updateMessageText: (newText) => {
            dispatch(updateMessageText(newText))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsClass)
export default DialogsContainer;