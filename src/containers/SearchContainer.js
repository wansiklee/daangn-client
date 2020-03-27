import React, { useEffect, useState, useMemo } from "react";
import Search from "../components/Search";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchProducts } from "../store/modules/search";
import qs from "qs";

const SearchContainer = ({ location }) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { products, error, lastPage, loading } = useSelector(
    ({ search, loading }) => ({
      products: search.products,
      error: search.error,
      lastPage: search.lastPage,
      loading: loading["products/SEARCH_PRODUCTS"]
    })
  );

  useEffect(() => {
    const { term } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    setQuery(term);
    dispatch(searchProducts({ term, page }));
  }, [dispatch, location.search, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <Search
      products={products}
      error={error}
      loading={loading}
      onClick={onClick}
      page={page}
      lastPage={lastPage}
      term={query}
    />
  );
};

export default withRouter(SearchContainer);
