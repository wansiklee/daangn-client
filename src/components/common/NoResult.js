import React from "react";
import styled from "styled-components";

const NoResultWrapper = styled.div`
  padding: 34px 0 24px 0;
  text-align: center;
  margin-bottom: 50px;
  .empty-msg {
    font-size: 16px;
    line-height: 22px;
    .keyword {
      font-weight: 600;
    }
  }
`;

const NoResult = ({ text }) => {
  return (
    <NoResultWrapper>
      <p className="empty-msg">
        <span className="keyword">'{text}'</span>에 대한 검색 결과가 없어요.
        <br />
        검색어를 다시 확인해주세요!
      </p>
    </NoResultWrapper>
  );
};

export default NoResult;
