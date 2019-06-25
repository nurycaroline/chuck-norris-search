import React from 'react';

const Button = ({ label, ...props }) => (
  <button type="button" {...props}>
    {label}
  </button>
);

export default Button;
