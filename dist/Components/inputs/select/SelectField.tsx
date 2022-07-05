import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export interface selectProps {
  labelId?: string;
  id?: string;
  value?: any;
  label?: string;
  onChange?: (e: any) => void;
  option?: any;
  inputProps?: any;
  multiple?: any;
  input?: any;
  MenuProps?: any;
  renderValue?: any;
  selected?: any;
  name?: string;
  error?: any;
  helperText?: any;
  sx?: any;
  style?: any;
  variant?: 'standard' | 'outlined' | 'filled';
  disabled?: any;
}
export const SelectField: React.FC<selectProps> = (props) => {
  return (
    <>
      <Select {...props}>
        {props.option?.map((elm: any) => {
          return (
            <MenuItem key={elm.name} value={elm.value}>
              {elm.name}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
