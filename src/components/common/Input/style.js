import styled from "styled-components";

export const InputWrapper = styled.input`
  border: none;
  border-bottom: 1px solid #4c4c4c;
  width: 100%;
  background-color: #ffffff;
  height: 35px;
  font-size: 14px;
  padding: 0 10px;
  outline: none;
  & + & {
    margin-top: 1rem;
  }
`;
