import React from "react";
import styled from "styled-components";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AskModalWrapper = styled.div`
  width: 320px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 20px;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const Button = styled.button`
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
    margin-left: 0.75rem;
  }
`;

const AskModal = ({
  visible,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel
}) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <AskModalWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <Button onClick={onCancel}>{cancelText}</Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </div>
      </AskModalWrapper>
    </Fullscreen>
  );
};

export default AskModal;
