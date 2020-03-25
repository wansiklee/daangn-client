import React from "react";
import styled from "styled-components";

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

const ProductActionButton = () => {
  return (
    <ProductActionButtonWrapper>
      <ActionButton>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </ProductActionButtonWrapper>
  );
};

export default ProductActionButton;
