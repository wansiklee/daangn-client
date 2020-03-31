import React, { useState } from "react";
import styled from "styled-components";
import AskRemoveModal from "./AskRemoveModal";

const ProductActionButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  color: #fff;
  cursor: pointer;
  background-color: ${props => props.theme.primaryColor};
  &:hover {
    background-color: ${props => props.theme.primaryDarker};
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

const ProductActionButton = ({ onEdit, onRemove }) => {
  const [visible, setVisible] = useState(false);

  const onRemoveClick = () => setVisible(true);
  const onCancel = () => setVisible(false);
  const onConfirm = () => {
    setVisible(false);
    onRemove();
  };
  return (
    <>
      <ProductActionButtonWrapper>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
      </ProductActionButtonWrapper>
      <AskRemoveModal
        visible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default ProductActionButton;
