import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../../lib/createRequestSaga";
import * as productsAPI from "../../lib/api/product";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "upload/INITIALIZE";
const CHANGE_FIELD = "upload/CHANGE_FIELD";
const UPLOAD_PRODUCT = "upload/UPLOAD_PRODUCT";
const UPLOAD_PRODUCT_SUCCESS = "upload/UPLOAD_PRODUCT_SUCCESS";
const UPLOAD_PRODUCT_FAILURE = "upload/UPLOAD_PRODUCT_FAILURE";
const SET_EDIT_PRODUCT = "upload/SET_EDIT_PRODUCT";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));
export const uploadProduct = createAction(
  UPLOAD_PRODUCT,
  ({ image, title, category, price, description }) => ({
    image,
    title,
    category,
    price,
    description
  })
);
export const setEditProduct = createAction(
  SET_EDIT_PRODUCT,
  product => product
);

const uploadProductSaga = createRequestSaga(
  UPLOAD_PRODUCT,
  productsAPI.productUpload
);
export function* uploadSaga() {
  yield takeLatest(UPLOAD_PRODUCT, uploadProductSaga);
}

const initialState = {
  image: "",
  title: "",
  category: "",
  price: "",
  description: "",
  product: null,
  productError: null,
  editProductId: null
};

const upload = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value
    }),
    [UPLOAD_PRODUCT]: state => ({
      ...state,
      product: null,
      productError: null
    }),
    [UPLOAD_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product
    }),
    [UPLOAD_PRODUCT_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      productError
    }),
    [SET_EDIT_PRODUCT]: (state, { payload: product }) => ({
      ...state,
      image: product.image,
      title: product.title,
      category: product.category,
      price: product.price,
      description: product.description,
      editProductId: product._id
    })
  },
  initialState
);

export default upload;
