import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../../lib/createRequestSaga";
import * as productsAPI from "../../lib/api/product";
import { takeLatest } from "redux-saga/effects";

const DETAIL_PRODUCT = "product/DETAIL_PRODUCT";
const DETAIL_PRODUCT_SUCCESS = "product/DETAIL_PRODUCT_SUCCESS";
const DETAIL_PRODUCT_FAILURE = "product/DETAIL_PRODUCT_FAILURE";
const UNLOAD_PRODUCT = "product/UNLOAD_PRODUCT";

export const detailProduct = createAction(DETAIL_PRODUCT, id => id);
export const unloadProduct = createAction(UNLOAD_PRODUCT);

const detailProductSaga = createRequestSaga(
  DETAIL_PRODUCT,
  productsAPI.getProduct
);
export function* productSaga() {
  yield takeLatest(DETAIL_PRODUCT, detailProductSaga);
}

const initialState = {
  product: null,
  error: null
};

const product = handleActions(
  {
    [DETAIL_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product
    }),
    [DETAIL_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    }),
    [UNLOAD_PRODUCT]: () => initialState
  },
  initialState
);

export default product;
