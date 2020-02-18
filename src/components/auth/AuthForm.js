import React from "react";
import styled from "styled-components";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const AuthFormWrapper = styled.div`
  h2 {
    color: #ff8a3d;
    margin-bottom: 2rem;
    font-weight: bold;
    font-size: 25px;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: "로그인",
  signup: "회원가입"
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormWrapper>
      <h2>{text}</h2>
      <form>
        <Input placeholder="이메일(아이디)" />
        {type === "signup" && <Input placeholder="닉네임" />}
        <Input placeholder="비밀번호" />
        {type === "signup" && <Input placeholder="비밀번호 확인" />}
        <ButtonWithMarginTop text={text} />
      </form>
    </AuthFormWrapper>
  );
};

export default AuthForm;
