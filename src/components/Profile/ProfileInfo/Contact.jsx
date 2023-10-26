import classes from "./ProfileInfo.module.css";
import React from "react";

const Contact = ({contactName, contactValue}) => {
    return <div className={classes.contact}><b>{contactName}</b>: <a href={`_${contactValue}`}></a></div>
}
export default Contact;