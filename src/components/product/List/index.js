import React from "react";
import styled from "styled-components";
import ProductCard from "../../common/ProductCard";

const ListWrapper = styled.div`
  padding-top: 100px;
  width: 980px;
  margin: 0 auto;
`;

const List = ({ products }) => {
  return (
    <ListWrapper>
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </ListWrapper>
  );
};

export default List;
