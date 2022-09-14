import React, { HTMLInputTypeAttribute } from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import s from './FormControl.module.css';

type FormsControls = {
    input: WrappedFieldInputProps,
    meta: WrappedFieldMetaProps,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    children: React.ReactNode,
    autoFocus?: boolean,
}

export const FromControl: React.FC<FormsControls> = (
    {
        input,
        meta,
        children,
        ...restprops
    }
) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={ s.formControl + " " + (hasError? s.error : " ") }>
            <div>
                { children }
            </div>
            { hasError && <span>{ meta.error }</span> }
        </div>
    )
}