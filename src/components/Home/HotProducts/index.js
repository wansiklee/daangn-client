import React from "react";
import List from "../../product/List";

const HotProducts = ({ products, error, loading }) => {
  return (
    <List products={products} error={error} loading={loading} home={true} />
  );
};

export default HotProducts;
