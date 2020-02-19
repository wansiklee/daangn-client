import styled from "styled-components";

export const Footer = styled.footer`
  padding: 40px 0 67px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #495057;
  color: #dee2e6;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: -0.6px;
`;

export const List = styled.ul`
  margin: 24px 0;
  display: flex;
  li {
    &:not(:last-child)::after {
      content: "|";
      margin: 0 16px;
      color: #868e96;
      font-weight: normal;
    }
    a {
      color: #dee2e6;
    }
  }
`;

export const Author = styled.p`
  font-weight: 200;
`;

export const Copyright = styled.div`
  color: #868e96;
  font-weight: 600;
  margin: 8px 0;
`;

export const IconList = styled.ul`
  margin: 24px 0;
  li {
    margin: 0 13px;
    a {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
