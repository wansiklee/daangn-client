import React from "react";
import {
  UploadWrapper,
  File,
  Title,
  Category,
  Price,
  Description,
  UploadBtn
} from "./style";

const Upload = ({
  fileName,
  onFileChange,
  title,
  setTitle,
  category,
  onCategoryChange,
  categoryOptions,
  price,
  setPrice,
  description,
  setDescription
}) => {
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
            {categoryOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
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
