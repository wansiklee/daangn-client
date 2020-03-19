import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getPriceComma } from "../../lib/utils";

const CardWrapper = styled.div`
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  width: calc(25% - 34px);
  margin-right: 34px;
  margin-bottom: 40px;
`;

const SLink = styled(Link)`
  .card-image {
    width: 100%;
    position: relative;
    height: 160px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    background-color: #f8f9fa;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card-desc {
    padding: 16px;
    padding-bottom: 0;
    .card-title {
      font-size: 17px;
      font-weight: 600;
      letter-spacing: -0.6px;
      color: #212529;
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .card-price {
      font-size: 15px;
      font-weight: 600;
      padding-bottom: 8px;
      border-bottom: 1px solid #e9ecef;
      line-height: 1.3;
      color: #ff8a3d;
    }
    .card-counts {
      padding: 12px 0;
      color: #adb5bd;
      font-size: 13px;
    }
  }
`;

const ProductCard = ({ product }) => {
  return (
    <CardWrapper>
      <SLink to={`/products/${product.id}`}>
        <div className="card-image">
          <img src={`/products/${product.image}`} />
        </div>
        <div className="card-desc">
          <h2 className="card-title">{product.title}</h2>
          <div className="card-price">{getPriceComma(product.price)}원</div>
          <div className="card-counts">
            <span>관심 {product.likes.length} ∙ </span>
            <span>댓글 {product.comments.length}</span>
          </div>
        </div>
      </SLink>
    </CardWrapper>
  );
};

export default ProductCard;
