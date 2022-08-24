import s from '../Dialogs.module.css';
import React from 'react';

export type MessageType = {
    message: string,
    id: number,
}

export const MessagesItem = (props: MessageType) => {

    return(
    <div className={ s.massage }>
        { props.message }
        </div>
    )
}
