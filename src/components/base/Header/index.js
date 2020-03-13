import React from "react";
import {
  HeaderWrapper,
  Wrapper,
  SearchInput,
  UserInfo,
  UploadButton,
  LoginButton
} from "./style";
import LogoImage from "../../../assets/logo-basic.svg";
import { IoMdCreate } from "react-icons/io";

const Header = ({ onLoginButtonClick, user }) => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <div className="column">
          <a href="/">
            <img alt="당근마켓" width="132" src={LogoImage} />
          </a>
        </div>
        <div className="column">
          <form>
            <SearchInput />
          </form>
        </div>
        <div className="column">
          {user && user.user && user.user.username ? (
            <div className="right">
              <UserInfo>{user.user.username}</UserInfo>
              <UploadButton href="/upload">
                <IoMdCreate className="icon" />
              </UploadButton>
            </div>
          ) : (
            <LoginButton onClick={onLoginButtonClick} text="로그인" />
          )}
        </div>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
