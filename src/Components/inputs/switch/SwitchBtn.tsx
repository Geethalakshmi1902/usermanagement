import React from 'react';
import Switch from '@mui/material/Switch';

export interface switchProps{
    defaultChecked?:any;
    disabled?:any;
    size?:string;
    color?:string;
    checked?:any;
    onChange?: (e: any) => void;
    inputProps?:any;
}

export const SwitchBtn:React.FC<switchProps> = (props:any) => {
  return (
    <>
     <Switch {...props} />
    </>
    );
};
