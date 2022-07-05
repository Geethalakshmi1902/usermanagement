import React from 'react';
import Rating from '@mui/material/Rating';
export interface ratingProps{
    name?:string;
    value?:any;
    onChange? : (e: any) => void;
    readOnly?: any;
    disabled?: any;
    defaultValue?: any;
    precision? : any;
    size?: string;
}
export const RatingBtn: React.FC<ratingProps> = (props:any) => {
  return (
    <>
    <Rating {...props}/>
    </>
    );
};
