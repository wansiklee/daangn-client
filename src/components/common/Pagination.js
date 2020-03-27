import React from "react";
import styled from "styled-components";
import qs from "qs";

const PaginationWrapper = styled.div`
  width: 200px;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
`;

const PageNumber = styled.div`
  font-weight: 600;
  font-size: 17px;
  margin: auto;
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  color: #fff;
  cursor: pointer;
  background-color: ${props => props.theme.primaryColor};
  &:hover {
    background-color: ${props => props.theme.primaryDarker};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const buildLink = ({ page }) => {
  const query = qs.stringify({ page });
  return `/?${query}`;
};

const Pagination = ({ page, lastPage }) => {
  return (
    <PaginationWrapper>
      <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({ page: page - 1 })}
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        disabled={page === lastPage}
        to={page === lastPage ? undefined : buildLink({ page: page + 1 })}
      >
        다음
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
