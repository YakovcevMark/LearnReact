import Dialogs from "./Dialogs";

import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs_page_reducer";
import {useContext} from "react";
import StoreContext from "../../store-context";
import {connect} from "react-redux";

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
//         <Dialogs
//             addMessage={onAddMessage}
//             updateMessageText={onUpdateMessageText}
//             state={store.getState().dialogsPage}
//         />
//     )
// }
const mapStateToProps = state => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (newText) => {
            dispatch(updateMessageTextActionCreator(newText))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;