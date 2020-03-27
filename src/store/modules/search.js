import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../../lib/createRequestSaga";
import * as productsAPI from "../../lib/api/product";
import { takeLatest } from "redux-saga/effects";

const SEARCH_PRODUCTS = "products/SEARCH_PRODUCTS";
const SEARCH_PRODUCTS_SUCCESS = "products/SEARCH_PRODUCTS_SUCCESS";
const SEARCH_PRODUCTS_FAILURE = "products/SEARCH_PRODUCTS_FAILURE";

export const searchProducts = createAction(
  SEARCH_PRODUCTS,
  ({ term, page }) => ({ term, page })
);

const searchProductsSaga = createRequestSaga(
  SEARCH_PRODUCTS,
  productsAPI.getSearchProducts
);
export function* searchSaga() {
  yield takeLatest(SEARCH_PRODUCTS, searchProductsSaga);
}

const initialState = {
  products: null,
  error: null,
  lastPage: 1
};

const search = handleActions(
  {
    [SEARCH_PRODUCTS_SUCCESS]: (
      state,
      { payload: products, meta: response }
    ) => ({
      ...state,
      products,
      lastPage: parseInt(response.headers["lastpage"], 10)
    }),
    [SEARCH_PRODUCTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    })
  },
  initialState
);

export default search;
