import React from "react";
import styled from "styled-components";
import ResultCard from "../common/ResultCard";

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
  }
`;

const Search = ({ products, onClick, page, lastPage }) => {
  return (
    <SearchResult>
      <div className="wrapper">
        <div className="products-wrapper">
          <p className="wrapper-title">중고거래</p>
          {products.length !== 0 &&
            products.map((p, i) => <ResultCard key={i} product={p} />)}
        </div>
      </div>
    </SearchResult>
  );
};

export default Search;
