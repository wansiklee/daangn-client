import React from "react";
import { Footer, List, Author, Copyright, IconList } from "./style";
import GithubLogo from "../../../assets/logo-github.svg";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Footer>
      <List>
        <li>
          <Link to="/">이용약관</Link>
        </li>
        <li>
          <Link to="/">개인정보 취급방침</Link>
        </li>
        <li>
          <Link to="/">위치기반서비스 이용약관</Link>
        </li>
        <li>
          <Link to="/">광고주센터</Link>
        </li>
        <li>
          <Link to="/">ABOUT US</Link>
        </li>
      </List>
      <Author>(주)당근마켓 클론 작성자 이완식</Author>
      <Copyright>
        Copyright &copy; Danggeun Market Clone Inc. All rights reserved.
      </Copyright>
      <IconList>
        <li>
          <a href="https://github.com/wansiklee">
            <img alt="깃허브" src={GithubLogo} />
          </a>
        </li>
      </IconList>
    </Footer>
  );
};
