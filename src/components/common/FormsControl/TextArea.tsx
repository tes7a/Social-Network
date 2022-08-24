import { HTMLInputTypeAttribute } from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import { FromControl } from './FormControl';

type FormsControls = {
    input: WrappedFieldInputProps,
    meta: WrappedFieldMetaProps,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    autoFocus?: boolean,
}

export const TextArea = (props: FormsControls) => {
    const { input, meta, ...restprops } = props;
    
    return <FromControl { ...props }><textarea { ...input } { ...restprops }/></FromControl>
}