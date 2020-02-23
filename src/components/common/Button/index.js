import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./style";

const Button = ({ text, onClick, className }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
