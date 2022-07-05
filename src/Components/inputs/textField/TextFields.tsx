import React from 'react'
import {Input} from './textField_style'

export enum InputStyle{
    outlined = 'outlined',
    filled = 'filled',
    standard = 'standard'
}

export enum InputType{
    text = 'text',
    number = 'number',
    passward = 'passward',
    search = 'search'
}

export interface TextProps {
    id?: string;
    label?: string;
    variant?: any;
    required?: any;
    defaultValue?: string;
    disabled?: any;
    type?: string;
    autoComplete?: string;
    InputProps?: any;
    InputLabelProps?: any;
    helperText?: any;
    error?: any;
    select?: any;
    value?:any;
    onChange? : (e: any) => void;
    SelectProps?: any;
    spacing?:any;
    name?:string;
    fullWidth?:any;
    onClick? : (e: any) => void;
    accept?:any;
    sx?:any;
    ref?:any;
    multiline?:any,
    rows?:any,
    checked?:any,


}

export const TextFields: React.FC<TextProps> = (props) => {
    return (
        <>
            <Input {...props} />
        </>
    )
}


