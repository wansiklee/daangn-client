import React from "react";
import { HeaderBar, HeaderWrapper, HeaderColumn, SearchInput } from "./style";
import LogoImage from "../../assets/logo-basic.svg";

const Header = () => {
  return (
    <HeaderBar>
      <HeaderWrapper>
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
        <HeaderColumn>버튼</HeaderColumn>
      </HeaderWrapper>
    </HeaderBar>
  );
};

export default Header;