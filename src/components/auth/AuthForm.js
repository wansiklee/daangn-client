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

const AuthForm = ({
  mode,
  onChangeMode,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  onSubmit,
  error
}) => {
  const modeText = mode === "login" ? "로그인" : "회원가입";
  return (
    <AuthFormWrapper>
      <h2>{modeText}</h2>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="이메일(아이디)"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        {mode === "signup" && (
          <Input
            placeholder="닉네임(3 ~ 15자)"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        )}
        <Input
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        {mode === "signup" && (
          <Input
            placeholder="비밀번호 확인(6 ~ 20자)"
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
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
