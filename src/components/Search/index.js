import React from "react";
import styled from "styled-components";
import ResultCard from "../common/ResultCard";
import NoResult from "../common/NoResult";

const SearchResult = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 100px 0 40px 0;
  .wrapper {
    border-radius: 8px;
    border: 1px solid #e9ecef;
    width: 800px;
    margin: 0 auto;
    margin-bottom: 20px;
    background: #fff;
    .products-wrapper {
      padding: 0 40px;
      .wrapper-title {
        font-weight: 600;
        color: #212529;
        font-size: 18px;
        margin: 20px 0;
      }
    }
    .more-button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      cursor: pointer;
      width: 100%;
      color: #868e96;
      font-size: 16px;
      border-top: 1px solid #e9ecef;
    }
  }
`;

const Search = ({
  products,
  error,
  loading,
  onClick,
  page,
  lastPage,
  term
}) => {
  if (error) {
    return <SearchResult>오류가 발생하였습니다.</SearchResult>;
  }

  if (loading || !products) {
    return <SearchResult></SearchResult>;
  }

  return (
    <SearchResult>
      <div className="wrapper">
        <div className="products-wrapper">
          <p className="wrapper-title">중고거래</p>
          {products &&
            products.data.map((p, i) => <ResultCard key={i} product={p} />)}
        </div>
        {products && products.data.length === 0 ? (
          <NoResult text={term} />
        ) : null}
        {page !== lastPage && lastPage !== 0 && (
          <div className="more-button" onClick={onClick}>
            <span>더보기</span>
          </div>
        )}
      </div>
    </SearchResult>
  );
};

export default Search;
