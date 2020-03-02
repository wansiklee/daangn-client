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
  .foot {
    text-align: right;
    span {
      margin-right: 0.25rem;
    }
    a {
      font-weight: bold;
      color: ${props => props.theme.primaryDarker};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ButtonWithMargin = styled(Button)`
  margin: 1rem 0;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 1rem;
`;

const AuthForm = ({ mode, onChangeMode, onSubmit, error }) => {
  const emailInput = useInput("");
  const nameInput = useInput("");
  const passwordInput = useInput("");
  const repeatPasswordInput = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    const { value: email } = emailInput;
    const { value: username } = nameInput;
    const { value: password } = passwordInput;
    const { value: repeatPassword } = repeatPasswordInput;
    onSubmit({ email, username, password, repeatPassword });
  };

  const modeText = mode === "login" ? "로그인" : "회원가입";
  return (
    <AuthFormWrapper>
      <h2>{modeText}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="이메일(아이디)"
          value={emailInput.value}
          onChange={emailInput.onChange}
          type="email"
        />
        {mode === "signup" && (
          <Input
            placeholder="닉네임(3 ~ 15자)"
            value={nameInput.value}
            onChange={nameInput.onChange}
          />
        )}
        <Input
          placeholder="비밀번호"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
          type="password"
        />
        {mode === "signup" && (
          <Input
            placeholder="비밀번호 확인(6 ~ 20자)"
            value={repeatPasswordInput.value}
            onChange={repeatPasswordInput.onChange}
            type="password"
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMargin text={modeText} />
      </form>
      <div className="foot">
        <span>
          {mode === "login"
            ? "아직 회원이 아니신가요?"
            : "계정이 이미 있으신가요?"}
        </span>
        <a onClick={onChangeMode}>{mode === "login" ? "회원가입" : "로그인"}</a>
      </div>
    </AuthFormWrapper>
  );
};

export default AuthForm;
