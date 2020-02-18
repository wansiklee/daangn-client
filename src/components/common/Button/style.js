import styled from "styled-components";

export const Container = styled.button`
  border: none;
  width: 100%;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  background-color: ${props => props.theme.primaryColor};
  &:hover {
    background-color: ${props => props.theme.primaryDarker};
  }
  text-align: center;
  padding: 0.5rem 0;
  cursor: pointer;
`;
