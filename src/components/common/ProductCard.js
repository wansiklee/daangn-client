import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { getPriceComma } from "../../lib/utils";

const CardWrapper = styled.div`
  text-align: left;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  width: calc(25% - 34px);
  margin-right: 34px;
  ${(props) =>
    props.user
      ? css`
          width: calc(33% - 14px);
          margin-right: 16px;
          :nth-child(3n) {
            margin-right: 0;
          }
        `
      : css`
          :nth-child(4n) {
            margin-right: 0;
          }
        `}
  margin-bottom: 40px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 16px -3px rgba(20, 20, 50, 0.12);
  }
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
      font-size: 16px;
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

const ProductCard = ({ product, user }) => {
  return (
    <CardWrapper user={user}>
      <SLink to={`/products/${product.id}`}>
        <div className="card-image">
          <img src={`/products/${product.image}`} />
        </div>
        <div className="card-desc">
          <h2 className="card-title">
            {product.title.length < 12
              ? product.title
              : `${product.title.slice(0, 12)}...`}
          </h2>
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
