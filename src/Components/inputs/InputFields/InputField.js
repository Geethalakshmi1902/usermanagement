import React from "react";

export default function InputField({
  value,
  name,
  placeholder,
  type,
  icon,
  onChange,
  autoFocus,
  onBlur,
  isDisabled,
  id,
  label,
  variant,
  required,
  defaultValue,
  disabled,
  autoComplete,
  InputProps,
  InputLabelProps,
  helperText,
  error,
  select,
  SelectProps,
  spacing,
  fullWidth,
  onClick,
  accept,
  sx,
  ref,
  multiline,
  rows,
  checked,
  
}) {
  if (icon) {
    if (icon === "site") {
      return (
        <div >
          <input
            type={type}
            className="pc-form-control pc-form-control-solid pc-form-control-lg"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            onBlur={onBlur}
            disabled={isDisabled}
            label={label}
            error={error}
            helperText={helperText}
            variant={variant}
          />
          <div >
            <span className="pc-input-group-text">.com</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pc-input-group">
        <div className="pc-input-group-prepend">
          <span className="pc-input-group-text">
            <div className="icon-color"><i class={"fa fa-" + icon}></i></div>
          </span>
          <input
            type={type}
            className="pc-form-control pc-form-control-solid pc-form-control-lg"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            onBlur={onBlur}
            disabled={isDisabled}
            label={label}
            error={error}
            helperText={helperText}
            variant={variant}
          />
          
        </div>
      </div>

      );
    }
  } else {
    return (
      <input
        type={type}
        className="pc-form-control pc-form-control-solid pc-form-control-lg"///
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        onBlur={onBlur}
        disabled={isDisabled}
        label={label}
            error={error}
            helperText={helperText}
            variant={variant}
      />
    );
  }
}
