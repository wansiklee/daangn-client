import React from "react";
import styled from "styled-components";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import useInput from "../../lib/hooks/useInput";

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

const AuthForm = ({ mode }) => {
  const emailInput = useInput("");
  const nameInput = useInput("");
  const passwordInput = useInput("");
  const repeatPasswordInput = useInput("");

  const handleSubmit = () => {
    console.log("제출 완료");
  };

  const modeText = mode === "login" ? "로그인" : "회원가입";
  return (
    <AuthFormWrapper>
      <h2>{modeText}</h2>
      <form>
        <Input
          placeholder="이메일(아이디)"
          value={emailInput.value}
          onChange={emailInput.onChange}
        />
        {mode === "signup" && (
          <Input
            placeholder="닉네임"
            value={nameInput.value}
            onChange={nameInput.onChange}
          />
        )}
        <Input
          placeholder="비밀번호"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
        />
        {mode === "signup" && (
          <Input
            placeholder="비밀번호 확인"
            value={repeatPasswordInput.value}
            onChange={repeatPasswordInput.onChange}
          />
        )}
        <ButtonWithMarginTop text={modeText} onClick={handleSubmit} />
      </form>
    </AuthFormWrapper>
  );
};

export default AuthForm;
