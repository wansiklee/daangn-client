import React from "react";
import {
  HeaderWrapper,
  HeaderColumn,
  SearchInput,
  UserInfo,
  LoginButton
} from "./style";
import LogoImage from "../../../assets/logo-basic.svg";

const Header = ({ onLoginButtonClick, user }) => {
  return (
    <HeaderWrapper>
      <div className="wrapper">
        <HeaderColumn>
          <a href="/">
            <img alt="당근마켓" width="132" src={LogoImage} />
          </a>
        </HeaderColumn>
        <HeaderColumn>
          <form>
            <SearchInput />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          {user && user.user && user.user.username ? (
            <UserInfo>{user.user.username}</UserInfo>
          ) : (
            <LoginButton onClick={onLoginButtonClick} text="로그인" />
          )}
        </HeaderColumn>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
