import React, { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import s from "./FormControl.module.css";

type defaultTextAreaType = any
    //DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export const FromControl: React.FC<any> = (
    {
        input,
        meta,
        children,
        ...restprops
    }
) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError? s.error : " ")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props: any) => {
    const { input, meta, child, ...restprops} = props
    return <FromControl {...props}><textarea {...input} {...restprops}/></FromControl>
}

export const Input = (props: any) => {
    const { input, meta, child, ...restprops} = props
    return <FromControl {...props}><input {...input} {...restprops}/></FromControl>
}

// export const Input: React.FC<any> = ({ input, meta, ...restprops }) => {
//     const hasError = meta.touched && meta.error
//
//     return (
//         <div className={s.formControl + " " + (hasError? s.error : " ")}>
//             <div>
//                 <input {...input} {...restprops}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }