import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Detail from "../../components/product/Detail";
import ProductActionButton from "../../components/common/ProductActionButton";
import { useSelector, useDispatch } from "react-redux";
import { detailProduct, unloadProduct } from "../../store/modules/product";

const DetailContainer = ({ match }) => {
  const { productId } = match.params;
  const dispatch = useDispatch();
  const { product, error, loading } = useSelector(({ product, loading }) => ({
    product: product.product,
    error: product.error,
    loading: loading["product/DETAIL_PRODUCT"]
  }));

  useEffect(() => {
    dispatch(detailProduct(productId));
    return () => {
      dispatch(unloadProduct());
    };
  }, [dispatch, productId]);

  return (
    <Detail
      product={product}
      loading={loading}
      error={error}
      actionButton={<ProductActionButton />}
    />
  );
};

export default withRouter(DetailContainer);
