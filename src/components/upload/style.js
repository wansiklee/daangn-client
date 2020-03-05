import styled from "styled-components";
import Button from "../common/Button";

export const UploadWrapper = styled.div`
  max-width: 680px;
  padding: 120px 15px 0 15px;
  margin: 0 auto;
  h5 {
    font-size: 32px;
    text-align: center;
    margin: 0;

    &::after {
      content: "";
      width: 80px;
      height: 2px;
      background-color: ${props => props.theme.primaryColor};
      display: block;
      margin: 40px auto;
    }
  }

  div {
    margin-bottom: 24px;
  }

  .form {
    border-color: #e9ecf3;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e9ecf3;
    border-radius: 0.25rem;
  }
`;

/*************
     File
 *************/
export const File = styled.div``;

/*************
     Title
 *************/
export const Title = styled.div``;

/*************
    Category
 *************/
export const Category = styled.div``;

/*************
     Price
 *************/
export const Price = styled.div``;

/*************
  Description
 *************/
export const Description = styled.div``;

export const UploadBtn = styled(Button)`
  display: block;
  width: 130px;
  height: 40px;
  margin: 80px auto;
  cursor: pointer;
`;
