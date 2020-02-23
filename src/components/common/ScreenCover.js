import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import transitions from "../../lib/styles/transitions";

const ScreenCoverWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(249, 249, 249, 0.85);

  ${props =>
    props.visible
      ? css`
          animation: ${transitions.fadeIn} 0.25s forwards;
        `
      : css`
          animation: ${transitions.fadeOut} 0.25s forwards;
        `}
`;

const ScreenCover = ({ visible }) => {
  useEffect(() => {
    // scrollbar
    document.body.style.overflowY = visible ? "hidden" : "initial";
  }, [visible]);

  if (!visible) return null;

  return <ScreenCoverWrapper visible={visible} />;
};

export default ScreenCover;
