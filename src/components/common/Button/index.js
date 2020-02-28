import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./style";

const Button = ({ text, ...rest }) => {
  return <ButtonWrapper {...rest}>{text}</ButtonWrapper>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
