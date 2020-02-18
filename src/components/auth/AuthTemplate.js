import React from "react";
import styled from "styled-components";

const AuthTemplateWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 80px;
  background: #f9f9f9;
`;

const Box = styled.div`
  padding: 60px 30px;
  background: #ffffff;
  width: 400px;
  border-radius: 4px;
  box-shadow: 0 0 10px ${props => props.theme.shadowColor};
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateWrapper>
      <Box>{children}</Box>
    </AuthTemplateWrapper>
  );
};

export default AuthTemplate;
