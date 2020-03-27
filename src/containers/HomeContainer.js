import React, { useEffect } from "react";
import Home from "../components/Home";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/modules/products";
import HotProducts from "../components/Home/HotProducts";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(({ products, loading }) => ({
    products: products.products,
    error: products.error,
    loading: loading["products/LIST_PRODUCTS"]
  }));

  useEffect(() => {
    dispatch(listProducts({ page: 1 }));
  }, [dispatch]);

  return (
    <Home
      hotProducts={
        <HotProducts products={products} error={error} loading={loading} />
      }
    />
  );
};

export default HomeContainer;
