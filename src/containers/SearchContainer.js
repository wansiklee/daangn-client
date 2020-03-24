import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { withRouter } from "react-router-dom";
import { getSearchProducts } from "../lib/api/product";

const SearchContainer = ({ location }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const term = decodeURI(location.search).split("=")[1];

  useEffect(() => {
    const fetchProducts = async () => {
      const {
        data: { data },
        headers: { lastpage }
      } = await getSearchProducts({ term, page });
      setData(data);
      setLastPage(Number(lastpage));
    };
    fetchProducts();
  }, [term, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <Search products={data} onClick={onClick} page={page} lastPage={lastPage} />
  );
};

export default withRouter(SearchContainer);
