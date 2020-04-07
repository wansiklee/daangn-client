import React, { useState } from "react";
import styled from "styled-components";
import AskLogoutModal from "./AskLogoutModal";

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
  const [visible, setVisible] = useState(false);

  const onLogoutClick = () => setVisible(true);
  const onCancel = () => setVisible(false);
  const onConfirm = () => {
    setVisible(false);
    onLogout();
  };
  return (
    <>
      <LogoutButtonWrapper>
        <LogoutButton onClick={onLogoutClick}>로그아웃</LogoutButton>
      </LogoutButtonWrapper>
      <AskLogoutModal
        visible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default ProductActionButton;
