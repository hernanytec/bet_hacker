import React from 'react';
import './style.css';

const CheckBox = ({onChange, value, label}) => {

  return (
    <div className="checkbox flex items-center">
    <input
      className="mr-1"
      type="checkbox"
      checked={value}
      onChange={
        (e) => onChange(e.target.checked)
      }
    />
    <span>{label}</span>
    </div>
  )
}

export default CheckBox;
