import React from "react";

const LoginButton = ({ children, handleClick, disabled }) => (
  <button
    className="btn-dark btn-block"
    onClick={handleClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default LoginButton;
