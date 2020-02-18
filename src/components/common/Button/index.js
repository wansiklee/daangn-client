import React from "react";
import PropTypes from "prop-types";
import { Container } from "./style";

const Button = ({ text, onClick, className }) => {
  return (
    <Container className={className} onClick={onClick}>
      {text}
    </Container>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
