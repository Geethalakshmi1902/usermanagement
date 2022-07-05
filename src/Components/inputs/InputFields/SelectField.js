import React, { useState } from "react";

export default function SelectField({
  name,
  onChange,
  value,
  onBlur,
  list,
  label,
  isDisabled,
  noDefault,
}) {
  const [data] = useState([
    {
      id: "msc",
      name: "language 1",
    },
    {
      id: "mac",
      name: "language 2",
    },
  ]);
  if (!list) {
    return (
      <select
        className="pc-form-select pc-form-select-lg pc-form-select-solid"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisabled}
      >
        <option value="">Select {label !== null ? label : name}...</option>
        {data.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    );
  } else {
    return (
      <select
        className="pc-form-select pc-form-select-lg pc-form-select-solid"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisabled}
      >
        {noDefault !== true && (
          <option value="">Select {label ? label : name}...</option>
        )}
        {list.length>0 && list.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name || item.Document_name || item.type|| item.variant_name || item.id }
            </option>
          );
        })}
      </select>
    );
  }
}
