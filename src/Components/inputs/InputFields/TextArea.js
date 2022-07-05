import React from 'react'

export default function TextArea({className,value, name, placeholder, rows,onChange,autoFocus,onBlur}) {
    return (
        <textarea
            className={`form-control form-control-lg form-control-solid ${className}`}
            rows={rows}
            name={name}
            placeholder={placeholder} onChange={onChange} autoFocus={autoFocus}
            onBlur={onBlur}
           defaultValue={value}></textarea>
    )
}
