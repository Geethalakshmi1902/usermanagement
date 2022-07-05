import React from 'react';
import Fab from '@mui/material/Fab';

export enum FabColor{
    primary = 'primary',
    secondary = 'secondary'
}
export enum FabType{
    extended = 'extended',
}

export enum FabSize{
    small = 'small',
    medium = 'medium'
}
export interface floatingProps{
    color?: string;
    variant?: string;
    disabled?: any;
    size?: string;
}

export const FloatingActionBtn: React.FC<floatingProps> = (props: any) => {
    return <>
        <Fab {...props}></Fab>
    </>;
};
