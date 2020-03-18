import React, { useState } from "react";
import Upload from "../../components/product/Upload";
import { uploadImage, upload } from "../../lib/api/product";
import { withRouter } from "react-router-dom";

const UploadContainer = ({ history }) => {
  const [path, setPath] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [typeError, setTypeError] = useState(null);
  const [error, setError] = useState(null);

  const categoryOptions = [
    { value: 0, label: "디지털/가전" },
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
    { value: 12, label: "기타 중고물품" }
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
    } catch (e) {
      setTypeError("사진 업로드에 실패하였습니다. 다시 시도해 주세요.");
    }
  };

  const onCategoryChange = ({ target: { value } }) => {
    setCategory(value ? Number(value) : undefined);
  };

  const onSubmit = async event => {
    event.preventDefault();
    try {
      const {
        data: { product }
      } = await upload({
        image: path,
        title,
        description,
        price,
        category
      });
      history.push(`/products/${product._id}`);
    } catch (e) {
      setError(e.response.data.msg);
    }
  };

  return (
    <Upload
      onSubmit={onSubmit}
      path={path}
      typeError={typeError}
      onDrop={onDrop}
      title={title}
      setTitle={setTitle}
      category={category}
      onCategoryChange={onCategoryChange}
      categoryOptions={categoryOptions}
      price={price}
      setPrice={setPrice}
      description={description}
      setDescription={setDescription}
      error={error}
    />
  );
};

export default withRouter(UploadContainer);
