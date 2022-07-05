import React from 'react';
import Slider from '@mui/material/Slider';

export interface sliderProps{
    value?: any;
    onChange?: (e: any) => void;
    sx?:any;
    disabled?:any;
    defaultValue?:number;
    size?:string;
    valueLabelDisplay?: string;
    getAriaValueText?:any;
    step?:number;
    marks?: any;
    min?:number;
    max?:number;
    getAriaLabel?:any;
    color?:string;
}

export const SliderBtn:React.FC<sliderProps> = (props:any) => {
  return (
    <>
        <Slider {...props}/>
    </>
    );
};
