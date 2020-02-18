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

const AuthForm = () => {
  return (
    <AuthFormWrapper>
      <h2>회원가입</h2>
      <Input placeholder="이메일(아이디)" />
      <Input placeholder="닉네임" />
      <Input placeholder="비밀번호" />
      <Input placeholder="비밀번호 확인" />
      <ButtonWithMarginTop text="가입하기" />
    </AuthFormWrapper>
  );
};

export default AuthForm;
