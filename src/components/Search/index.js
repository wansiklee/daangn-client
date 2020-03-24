import React from "react";
import styled from "styled-components";
import ResultCard from "../common/ResultCard";
import NoResult from "../common/NoResult";

const SearchResult = styled.div`
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
      .more-loading {
        display: none;
        .loader {
          text-indent: -9999em;
          width: 24px;
          height: 24px;
          border-radius: 100%;
          background: linear-gradient(
            to top right,
            #ff8a3d 25%,
            rgba(255, 255, 255, 0) 70%
          );
          position: relative;
          animation: animation 1.4s infinite linear;
          transform: translateZ(0);
        }
      }
    }
  }
`;

const Search = ({ loading, products, onClick, page, lastPage, term }) => {
  return (
    <SearchResult>
      <div className="wrapper">
        <div className="products-wrapper">
          <p className="wrapper-title">중고거래</p>
          {products.map((p, i) => (
            <ResultCard key={i} product={p} />
          ))}
        </div>
        {!loading && products && products.length === 0 ? (
          <NoResult text={term} />
        ) : null}
        {page !== lastPage && (
          <div className="more-button" onClick={onClick}>
            <span>더보기</span>
            <div className="more-loading">
              <div className="loader"></div>
            </div>
          </div>
        )}
      </div>
    </SearchResult>
  );
};

export default Search;
