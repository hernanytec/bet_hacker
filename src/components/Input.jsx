import React from 'react';

const Input = ({ placeholder, onChange, value, type }, ...rest) => {
  return <input value={value} placeholder={placeholder}  onChange={
    (e) => onChange(e.target.value)
  } className="input" type={type} {...rest} />
}

export default Input;
