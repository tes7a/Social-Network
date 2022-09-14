import React, { ComponentType } from 'react';
import { Field, Validator, WrappedFieldProps } from 'redux-form';

export const CreateFiled = ( 
    placeholder: string | null, 
    name: string, 
    validators: Validator | Validator[] | undefined, 
    component: "input" | "select" | "textarea" | ComponentType<WrappedFieldProps> | undefined, 
    props = {}, 
    text = "",
    ) => 
    <div>
        <Field
            placeholder={ placeholder }
            name={ name }
            validate={ validators }
            component={ component }
            { ...props }
        />
        { text }
    </div>
 