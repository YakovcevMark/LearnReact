import classes from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogsItems";
import Message from "./Messages/Messages";
import React from "react";
import {AddNewMessageForm} from "../common/FormControls/AddNewMessageForm";

const Dialogs = (props) => {
    const dialogsElements =
        props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)

    const messagesElements =
        props.state.messagesData.map(m => <Message id={m.id} message={m.message}/>)


    const addMessage = (newMessageData) => {
        props.addMessage(newMessageData.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <AddNewMessageForm onSubmit={addMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs;