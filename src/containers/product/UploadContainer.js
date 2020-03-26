import React, { useState, useEffect, useCallback } from "react";
import Upload from "../../components/product/Upload";
import { uploadImage } from "../../lib/api/product";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  uploadProduct,
  initialize
} from "../../store/modules/upload";

const UploadContainer = ({ history }) => {
  const [path, setPath] = useState("");
  const [typeError, setTypeError] = useState(null);
  const [error, setError] = useState(null);
  const {
    image,
    title,
    category,
    price,
    description,
    product,
    productError
  } = useSelector(({ upload }) => ({
    image: upload.image,
    title: upload.title,
    category: upload.category,
    price: upload.price,
    description: upload.description,
    product: upload.product,
    productError: upload.productError
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);

  const onTitleChange = e => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onCategoryChange = e => {
    onChangeField({
      key: "category",
      value: e.target.value ? Number(e.target.value) : undefined
    });
  };

  const onPriceChange = e => {
    onChangeField({ key: "price", value: Number(e.target.value) });
  };

  const onDescriptionChange = e => {
    onChangeField({ key: "description", value: e.target.value });
  };

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

  const onDrop = async image => {
    const type = image[0].type;
    if (!["image/png", "image/jpeg"].includes(type)) {
      setTypeError("이미지 파일(png, jpeg)만 올려주세요");
      return;
    }
    const formData = new FormData();
    formData.append("image", image[0]);
    // multiple image
    // images.forEach(image => formData.append("image", image));

    try {
      const {
        data: { path }
      } = await uploadImage({ formData });
      setPath(path);
      onChangeField({ key: "image", value: path });
    } catch (e) {
      setTypeError("사진 업로드에 실패하였습니다. 다시 시도해 주세요.");
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    dispatch(uploadProduct({ image, title, category, price, description }));
  };

  useEffect(() => {
    if (product) {
      history.push(`/products/${product.product._id}`);
    }
    if (productError) {
      setError(productError.response.data.msg);
    }
  }, [history, product, productError]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Upload
      onSubmit={onSubmit}
      path={path}
      typeError={typeError}
      onDrop={onDrop}
      title={title}
      onTitleChange={onTitleChange}
      category={category}
      onCategoryChange={onCategoryChange}
      categoryOptions={categoryOptions}
      price={price}
      onPriceChange={onPriceChange}
      description={description}
      onDescriptionChange={onDescriptionChange}
      error={error}
    />
  );
};

export default withRouter(UploadContainer);
