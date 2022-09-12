import React from 'react';
import s from './Contact.module.css';

type ContactType = {
    contactTitle: string,
    contactValue: string ,
}

export const Contact: React.FC<ContactType> = ({ contactTitle, contactValue }) => {
    return <div className={ s.contact }><b>{ contactTitle }</b>: { contactValue }</div>
}