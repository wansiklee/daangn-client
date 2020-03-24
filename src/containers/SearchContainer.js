import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { withRouter } from "react-router-dom";
import { getSearchProducts } from "../lib/api/product";

const SearchContainer = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const term = decodeURI(location.search).split("=")[1];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const {
          data: { data },
          headers: { lastpage }
        } = await getSearchProducts({ term, page });
        setData(data);
        setLastPage(Number(lastpage));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [term, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <Search
      loading={loading}
      products={data}
      onClick={onClick}
      page={page}
      lastPage={lastPage}
      term={term}
    />
  );
};

export default withRouter(SearchContainer);
