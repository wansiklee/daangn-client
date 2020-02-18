import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  flex-direction: column;
  border: 1px solid #fafafa;
  width: 100%;
  border-radius: 4px;
  background-color: #cdd7e0;
  height: 35px;
  font-size: 1rem;
  padding: 0 10px;
  outline: none;
  &:focus {
    border: 1px solid #ff8a3d;
  }
  & + & {
    margin-top: 1rem;
  }
`;
