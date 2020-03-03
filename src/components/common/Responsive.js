import React from "react";
import styled from "styled-components";

const ResponsiveWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveWrapper {...rest}>{children}</ResponsiveWrapper>;
};

export default Responsive;
