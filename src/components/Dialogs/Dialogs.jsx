import classes from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogsItems";
import Message from "./Messages/Messages";
import React from "react";

const Dialogs = (props) => {
    const dialogsElements =
        props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)

    const messagesElements =
        props.state.messagesData.map(m => <Message id={m.id} message={m.message}/>)


    const addMessage = () => {
        props.addMessage();

    }
    const updateMessageText = (e) => {
        const newText = e.target.value;
        props.updateMessageText(newText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea
                    onChange={updateMessageText}
                    value={props.state.newMessageText}
                />
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;