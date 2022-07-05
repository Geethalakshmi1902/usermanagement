import React from 'react';
import Radio from '@mui/material/Radio';

export interface radioProps{
    checked?: any;
    onChange? : (e: any) => void;
    value?: string;
    name?: string;
    inputProps?: any;
    sx?: any;
    size? : any;
    color?:string;
}
export const RadioBtn: React.FC<radioProps> = (props: any) => {
    
  return (
    <>
        <Radio {...props}/>
    </>
    );
};
