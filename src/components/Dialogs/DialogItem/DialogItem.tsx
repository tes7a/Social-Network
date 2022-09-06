import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { TypeDialog } from '../../../bll/dialogs-reducer';

export const DialogItem = (props : TypeDialog) => {
    let path = '/dialog/1' + props.id;

    return (
        <div className={ s.dialog + ' ' + s.active }>
            <NavLink className={ s.nav } to={ path }>{ props.name }</NavLink>
        </div>
    )
}
 