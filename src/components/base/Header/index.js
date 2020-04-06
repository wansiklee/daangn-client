import React from "react";
import {
  HeaderWrapper,
  Wrapper,
  UserInfo,
  UploadButton,
  LoginButton,
} from "./style";
import LogoImage from "../../../assets/logo-basic.svg";
import { IoMdCreate, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = ({ onLoginButtonClick, user, value, onChange, onSubmit }) => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <div className="column">
          <Link to="/">
            <img alt="당근마켓" width="132" src={LogoImage} />
          </Link>
        </div>
        <div className="column">
          <div className="search">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="상품을 검색해보세요."
                value={value}
                onChange={onChange}
              />
              <button>
                <IoIosSearch className="search-icon" />
              </button>
            </form>
          </div>
        </div>
        <div className="column">
          {user && user.user && user.user.username ? (
            <div className="right">
              <UserInfo to={`/${user.user._id}`}>{user.user.username}</UserInfo>
              <UploadButton to="/upload">
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
