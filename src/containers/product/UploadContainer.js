import React, { useState } from "react";
import Upload from "../../components/upload";
import client from "../../lib/api/client";

const UploadContainer = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

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

  const onDrop = async images => {
    const formData = new FormData();
    images.forEach(image => formData.append("image", image));

    try {
      const {
        data: { files }
      } = await client.post("/api/upload", formData, {
        headers: { "content-type": "multipart/form-data" }
      });
      console.log(files);
    } catch (e) {
      console.log("사진 업로드에 실패하였습니다.");
    }
  };

  const onCategoryChange = ({ target: { value } }) => {
    setCategory(value ? Number(value) : undefined);
  };

  return (
    <Upload
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
    />
  );
};

export default UploadContainer;
