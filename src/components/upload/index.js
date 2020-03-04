import React, { useState } from "react";
import {
  UploadWrapper,
  File,
  Title,
  Category,
  Price,
  Description,
  UploadBtn
} from "./style";

const Upload = () => {
  const [fileName, setFileName] = useState("파일선택");
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const onFileChange = ({ target: { files } }) => {
    if (files !== null && files.length > 0) {
      setFileName(files[0].name);
      setImage(files[0]);
    }
  };

  const onCategoryChange = ({ target: { value } }) => {
    setCategory(value ? Number(value) : undefined);
  };

  return (
    <UploadWrapper>
      <h5>중고거래 상품 등록</h5>
      <form className="form-control">
        <File>
          <input className="file-name" value={fileName} disabled />
          <label htmlFor="upload" className="upload-btn">
            업로드
          </label>
          <input
            type="file"
            id="upload"
            className="upload-hidden"
            onChange={onFileChange}
          />
        </File>
        <Title>
          <input
            type="text"
            className="form"
            placeholder="제품 이름을 입력해주세요"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Title>
        <Category>
          <select className="form" value={category} onChange={onCategoryChange}>
            <option value={undefined} disabled selected>
              카테고리를 선택해주세요.
            </option>
            <option value={0}>디지털/가전</option>
            <option value={1}>가구/인테리어</option>
            <option value={2}>유아동/유아도서</option>
            <option value={3}>생활/가공식품</option>
            <option value={4}>여성의류</option>
            <option value={5}>여성잡화</option>
            <option value={6}>뷰티/미용</option>
            <option value={7}>남성패션/잡화</option>
            <option value={8}>스포츠/레저</option>
            <option value={9}>게임/취미</option>
            <option value={10}>도서/티켓/음반</option>
            <option value={11}>반려동물용품</option>
            <option value={12}>기타 중고물품</option>
          </select>
        </Category>
        <Price>
          <input
            type="number"
            className="form"
            min="0"
            step="1000"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            placeholder="가격을 입력해주세요.(￦)"
          />
        </Price>
        <Description>
          <textarea
            className="form"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="제품 설명을 작성해주세요."
            style={{ height: 250 }}
          />
        </Description>
        <UploadBtn text="상품 등록하기" />
      </form>
    </UploadWrapper>
  );
};

export default Upload;
