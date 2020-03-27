import React from "react";
import Pagination from "../../components/common/Pagination";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import qs from "qs";

const PaginationContainer = ({ location }) => {
  const { products, lastPage, loading } = useSelector(
    ({ products, loading }) => ({
      products: products.products,
      lastPage: products.lastPage,
      loading: loading["products/LIST_PRODUCTS"]
    })
  );

  if (!products || loading) return null;

  const { page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  return <Pagination page={parseInt(page, 10)} lastPage={lastPage} />;
};

export default withRouter(PaginationContainer);
