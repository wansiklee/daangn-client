import React from "react";
import {
  UploadWrapper,
  File,
  Title,
  Category,
  Price,
  Description,
  UploadBtn,
  ErrorMessage
} from "./style";
import Dropzone from "../../common/Dropzone";

const Upload = ({
  onSubmit,
  path,
  typeError,
  onDrop,
  title,
  setTitle,
  category,
  onCategoryChange,
  categoryOptions,
  price,
  setPrice,
  description,
  setDescription,
  error
}) => {
  return (
    <UploadWrapper>
      <h5>중고거래 상품 등록</h5>
      <form className="form-control" onSubmit={onSubmit}>
        <File>
          <Dropzone onDrop={onDrop} />
          {path && <img src={`/products/${path}`} />}
        </File>
        {typeError && <ErrorMessage>{typeError}</ErrorMessage>}
        <Title>
          <input
            type="text"
            className="form"
            placeholder="제품 이름을 입력해주세요."
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <UploadBtn text="상품 등록하기" />
      </form>
    </UploadWrapper>
  );
};

export default Upload;
