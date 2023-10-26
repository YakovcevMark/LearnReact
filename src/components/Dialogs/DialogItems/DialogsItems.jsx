import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    const path = "/dialogs/" + id;
    return <div className={classes.dialog}>
        <NavLink to={path}> {name} </NavLink>
    </div>
}

export default DialogItem;