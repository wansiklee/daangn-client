import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Detail from "../../components/product/Detail";
import ProductActionButton from "../../components/common/ProductActionButton";
import { useSelector, useDispatch } from "react-redux";
import { detailProduct, unloadProduct } from "../../store/modules/product";
import { setEditProduct } from "../../store/modules/upload";

const DetailContainer = ({ match, history }) => {
  const { productId } = match.params;
  const dispatch = useDispatch();
  const { product, error, loading, user } = useSelector(
    ({ product, loading, user }) => ({
      product: product.product,
      error: product.error,
      loading: loading["product/DETAIL_PRODUCT"],
      user: user.user
    })
  );

  useEffect(() => {
    dispatch(detailProduct(productId));
    return () => {
      dispatch(unloadProduct());
    };
  }, [dispatch, productId]);

  const onEdit = () => {
    dispatch(setEditProduct(product.data));
    history.push("/upload");
  };

  const ownProduct =
    (user && user.user._id) === (product && product.data.user._id);

  return (
    <Detail
      product={product}
      loading={loading}
      error={error}
      actionButton={ownProduct && <ProductActionButton onEdit={onEdit} />}
    />
  );
};

export default withRouter(DetailContainer);
