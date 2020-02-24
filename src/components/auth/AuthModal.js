import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const AuthModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  .wrapper {
    width: 606px;
    height: 480px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    display: flex;
    .white-wrapper {
      flex: 1;
      background: white;
      padding: 1.5rem;
      .exit-wrapper {
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;
        color: #868e96;
        svg {
          cursor: pointer;
        }
      }
    }
  }
`;

const AuthModal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <AuthModalWrapper>
      <div className="wrapper">
        <div className="white-wrapper">
          <div className="exit-wrapper">
            <MdClose onClick={onClose} />
          </div>
        </div>
      </div>
    </AuthModalWrapper>
  );
};

export default AuthModal;
