import React from "react";
import styled from "styled-components";

const LogoutButtonWrapper = styled.div``;

const LogoutButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor};
  &:hover {
    background-color: ${(props) => props.theme.primaryDarker};
  }
`;

const ProductActionButton = ({ onLogout }) => {
  return (
    <LogoutButtonWrapper>
      <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
    </LogoutButtonWrapper>
  );
};

export default ProductActionButton;
