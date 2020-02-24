import React from "react";
import styled, { css } from "styled-components";
import welcomeImage from "../../assets/wecome.jpg";
import { MdClose } from "react-icons/md";
import transitions from "../../lib/styles/transitions";

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
    height: 467.7px;
    ${props =>
      props.visible
        ? css`
            animation: ${transitions.popIn} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOut} 0.5s forwards ease-in-out;
          `}
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    display: flex;
    .image-wrapper {
      width: 216px;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .white-wrapper {
      flex: 1;
      background: white;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;

      .exit-wrapper {
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;
        color: #868e96;
        svg {
          cursor: pointer;
        }
      }
      .content {
        flex: 1;
      }
    }
  }
`;

const AuthModal = ({ visible, onClose, children }) => {
  if (!visible) return null;
  return (
    <AuthModalWrapper visible={visible}>
      <div className="wrapper">
        <div className="image-wrapper">
          <div>
            <img src={welcomeImage} alt="welcome" />
          </div>
        </div>
        <div className="white-wrapper">
          <div className="exit-wrapper">
            <MdClose onClick={onClose} />
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    </AuthModalWrapper>
  );
};

export default AuthModal;
