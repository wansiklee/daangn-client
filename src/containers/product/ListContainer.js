import React, { useEffect, useState } from "react";
import List from "../../components/product/List";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../store/modules/products";
import { withRouter } from "react-router-dom";

const ListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(({ products, loading }) => ({
    products: products.products,
    error: products.error,
    loading: loading["products/LIST_PRODUCTS"]
  }));
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const { page = 1 } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    category
      ? dispatch(listProducts({ category, page }))
      : dispatch(listProducts({ page }));
  }, [dispatch, location.search, category]);

  const categoryOptions = [
    { value: 1, label: "가구/인테리어" },
    { value: 2, label: "유아동/유아도서" },
    { value: 3, label: "생활/가공식품" },
    { value: 4, label: "여성의류" },
    { value: 5, label: "여성잡화" },
    { value: 6, label: "뷰티/미용" },
    { value: 7, label: "남성패션/잡화" },
    { value: 8, label: "스포츠/레저" },
    { value: 9, label: "게임/취미" },
    { value: 10, label: "도서/티켓/음반" },
    { value: 11, label: "반려동물용품" },
    { value: 12, label: "디지털/가전" },
    { value: 13, label: "기타 중고물품" }
  ];

  const onCategoryChange = ({ target: { value } }) => {
    setCategory(value ? Number(value) : false);
  };

  return (
    <List
      products={products}
      loading={loading}
      error={error}
      categoryOptions={categoryOptions}
      category={category}
      onCategoryChange={onCategoryChange}
    />
  );
};

export default withRouter(ListContainer);
