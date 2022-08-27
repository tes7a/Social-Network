export const requiredField = (value: []) => {
    if (value) return undefined;
    return "Field required";
}

export const maxlength = (maxlength: number) => (value: []) => {
    if(value.length > maxlength) return `Max length is ${ maxlength } symbol`;
    return undefined;
}