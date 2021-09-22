import classes from "../Dialogs.module.css";
import React from "react";

export type MessageType = {
    message: string
    id: number
}



export const MassgesItem = (props: MessageType) => {
    return(<div className={classes.massage}>{props.message}</div>)
}
