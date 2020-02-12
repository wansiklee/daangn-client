import styled from "styled-components";

export const HeaderBar = styled.header`
  width: 100%;
  background-color: ${props => props.theme.bgColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 3px 5px 0 ${props => props.theme.shadowColor};
  z-index: 2;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 17px 0;
  position: relative;
`;

export const HeaderColumn = styled.div`
  width: 33%; /* 980px */
  text-align: center;
`;

export const SearchInput = styled.input`
  background-color: ${props => props.theme.bgColor};
  left: 150px;
  top: 17px;
  border-radius: 4px;
  border: solid 1px ${props => props.theme.primaryColor};
  text-decoration: none;
  padding: 1px 8px 1px 14px;
  height: 40px;
`;
