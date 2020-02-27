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

const AuthForm = ({ mode, onChangeMode }) => {
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
        <ButtonWithMargin text={modeText} onClick={handleSubmit} />
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
