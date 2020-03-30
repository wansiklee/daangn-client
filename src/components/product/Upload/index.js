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
  image,
  typeError,
  onDrop,
  title,
  onTitleChange,
  category,
  onCategoryChange,
  categoryOptions,
  price,
  onPriceChange,
  description,
  onDescriptionChange,
  error,
  isEdit
}) => {
  return (
    <UploadWrapper>
      <h5>{isEdit ? "상품 수정" : "중고거래 상품 등록"}</h5>
      <form className="form-control" onSubmit={onSubmit}>
        <File>
          <Dropzone onDrop={onDrop} />
          {image && <img src={`/products/${image}`} />}
        </File>
        {typeError && <ErrorMessage>{typeError}</ErrorMessage>}
        <Title>
          <input
            type="text"
            className="form"
            placeholder="제품 이름을 입력해주세요."
            value={title}
            onChange={onTitleChange}
          />
        </Title>
        <Category>
          <select
            className="form"
            value={category || "default"}
            onChange={onCategoryChange}
          >
            <option value={"default"} disabled>
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
            onChange={onPriceChange}
            placeholder="가격을 입력해주세요.(￦)"
          />
        </Price>
        <Description>
          <textarea
            className="form"
            value={description}
            onChange={onDescriptionChange}
            placeholder="제품 설명을 작성해주세요."
            style={{ height: 250 }}
          />
        </Description>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <UploadBtn text={`상품 ${isEdit ? "수정" : "등록"}하기`} />
      </form>
    </UploadWrapper>
  );
};

export default Upload;
