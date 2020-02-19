import React from "react";
import { Footer, List, Author, Copyright, IconList } from "./style";
import GithubLogo from "../../../assets/logo-github.svg";

export default () => {
  return (
    <Footer>
      <List>
        <li>
          <a href="#">이용약관</a>
        </li>
        <li>
          <a href="#">개인정보 취급방침</a>
        </li>
        <li>
          <a href="#">위치기반서비스 이용약관</a>
        </li>
        <li>
          <a href="#">광고주센터</a>
        </li>
        <li>
          <a href="#">ABOUT US</a>
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
