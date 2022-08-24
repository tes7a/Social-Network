import React, { HTMLInputTypeAttribute } from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import { FromControl } from './FormControl';

type FormsControls = {
    input: WrappedFieldInputProps,
    meta: WrappedFieldMetaProps,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    autoFocus?: boolean,
}

export const Input = (props: FormsControls) => {
    const { input, meta, ...restprops } = props;
    
    return <FromControl { ...props }><input { ...input } { ...restprops }/></FromControl>
}