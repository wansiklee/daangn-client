import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getPriceComma } from "../../lib/utils";

const ProductsList = styled.div`
  position: relative;
  text-align: left;
  display: inline-block;
  width: 217px;
  margin-right: 33px;
  :nth-child(3n-2) {
    margin-right: 0;
  }
  margin-bottom: 40px;
`;

const SLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #212529;
`;

const Image = styled.div`
  height: 160px;
  overflow: hidden;
  background-color: #f8f9fa;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  .title {
    display: block;
    font-weight: 600;
    color: #212529;
    font-size: 16px;
    line-height: 18px;
    margin-top: 10px;
  }
  .card-price {
    font-weight: 600;
    color: #ff8a3d;
    font-size: 15px;
    line-height: 18px;
    margin-top: 6px;
  }
`;

const ResultCard = ({ product }) => {
  return (
    <ProductsList>
      <SLink to={`/products/${product.id}`}>
        <Image>
          <img src={`/products/${product.image}`} />
        </Image>
        <Info>
          <div className="card-title">
            <span className="title">{product.title}</span>
          </div>
          <p className="card-price">{getPriceComma(product.price)}원</p>
        </Info>
      </SLink>
    </ProductsList>
  );
};

export default ResultCard;
