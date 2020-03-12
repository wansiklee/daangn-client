import styled from "styled-components";
import Responsive from "../../common/Responsive";
import Button from "../../common/Button";

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  background-color: ${props => props.theme.bgColor};
  box-shadow: 0 3px 5px 0 ${props => props.theme.shadowColor};
  z-index: 2;
`;

export const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
  .column {
    width: 33%; /* 980px */
    text-align: center;
    font-size: 1.7rem;
    margin: auto;
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const SearchInput = styled.input`
  background-color: ${props => props.theme.bgColor};
  border: solid 1px ${props => props.theme.primaryColor};
  border-radius: 4px;
  outline: none;
  padding: 1px 8px 1px 14px;
  height: 40px;
`;

export const UserInfo = styled.div`
  font-weight: bold;
  color: ${props => props.theme.primaryColor};
  margin-right: 20px;
`;

export const UploadButton = styled.a`
  width: 45px;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.bgColor};
  border-radius: 4px;
  &:hover {
    background-color: ${props => props.theme.primaryDarker};
  }

  .icon {
    height: 1.2rem;
  }
`;

export const LoginButton = styled(Button)`
  width: 100px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.primaryColor};
  border: solid 1px ${props => props.theme.primaryColor};
  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.bgColor};
  }
`;
