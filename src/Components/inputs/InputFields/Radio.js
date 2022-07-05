import React from "react";

export default function Radio({
  className,
  value,
  onClick,
  name,
  onChange,
  autoFocus,
  onBlur,
  span,
  label,
  isSelected,
}) {
  return (
    <>
      <label className={className}>
        <input
          type="radio"
          name={name}
          onClick={onClick}
          onChange={onChange}
          onBlur={onBlur}
          autoFocus={autoFocus}
          value={value}
          checked={isSelected}
        />
        <span></span>
        {label}
      </label>
      <div className="ms-auto text-muted fw-bold">{span}</div>
    </>
  );
}
