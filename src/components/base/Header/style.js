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
    width: 44%;
    text-align: center;
    font-size: 1.7rem;
    .search {
      border-radius: 4px;
      border: solid 1px #ff8a3d;
      text-decoration: none;
      padding: 0px 8px 0px 14px;
      form {
        display: flex;
        input {
          width: 300px;
          height: 40px;
          border: none;
          font-size: 18px;
          color: #212529;
          margin-right: 70px;
          outline: none;
        }
        button {
          background: none;
          border: none;
          font: inherit;
          cursor: pointer;
          .search-icon {
            fill: #ff8a3d;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
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
