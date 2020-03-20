import React from "react";
import List from "../../product/List";

const HotProducts = ({ products }) => {
  return <List products={products} home={true} />;
};

export default HotProducts;
