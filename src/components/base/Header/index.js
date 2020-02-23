import React from "react";
import { HeaderWrapper, HeaderColumn, SearchInput, NavButton } from "./style";
import LogoImage from "../../../assets/logo-basic.svg";

const Header = ({ onLoginButtonClick }) => {
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
          <NavButton onClick={onLoginButtonClick} text="로그인" />
        </HeaderColumn>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
