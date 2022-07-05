import React from 'react'
import Checkbox from '@mui/material/Checkbox';

export enum CheckboxColor{
    secondary= "secondary",
    success = "success",
    default = "default",
    primary = "primary"
}

export interface CheckboxProps {
    defaultChecked? : any;
    disabled?: any;
    checked?: any;
    color?: string;
    icon?: any;
    checkedIcon?: any;
    onChange? : (e: any) => void;
 
  }

export const CheckBox:React.FC<CheckboxProps> = (props:any) => {
    return (
        <>
            <Checkbox {...props} />
        </>
    )
}
