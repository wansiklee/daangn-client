import React from "react";
import styled from "styled-components";
import ProductCard from "../../common/ProductCard";

const Title = styled.div`
  padding-top: 100px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.6px;
  text-align: center;
  margin-bottom: 40px;
`;

const Divider = styled.div`
  width: 70px;
  border-top: 2px solid #ff8a3d;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const ListWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  text-align: center;
`;

const List = ({ products }) => {
  return (
    <>
      <Title>중고 매물</Title>
      <Divider />
      <ListWrapper>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </ListWrapper>
    </>
  );
};

export default List;
