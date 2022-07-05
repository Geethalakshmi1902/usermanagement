import React from "react";

export default function CheckBox({
  value,
  name,
  label,
  className,
  onChange,
  onBlur,
  isSelected,
  span,
  id
}) {
  return (
    <>
      <label className={className}>
        <input
          name={name}
          type="checkbox"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          checked={isSelected}
          id={id}
        />
        <span></span>
        {label}
      </label>
      <div className="ml-auto text-muted fw-bold">{span}</div>
    </>
  );
}
