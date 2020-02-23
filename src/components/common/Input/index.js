import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./style";

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
  autoComplete,
  name
}) => {
  return (
    <InputWrapper
      className={className}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      type={type}
      autoComplete={autoComplete}
      name={name}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Input;
