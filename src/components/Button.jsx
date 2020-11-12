import React from 'react';

const Button = ({ title, onClick, type = "primary" }, rest) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${type} button`}
    >
      {title}
    </button>
  )
}

export default Button;
