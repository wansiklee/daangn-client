import React from "react";
import PageTemplate from "../components/base/PageTemplate";
import ListContainer from "../containers/product/ListContainer";
import PaginationContainer from "../containers/product/PaginationContainer";

const ProductListPage = () => {
  return (
    <PageTemplate>
      <ListContainer />
      <PaginationContainer />
    </PageTemplate>
  );
};

export default ProductListPage;
