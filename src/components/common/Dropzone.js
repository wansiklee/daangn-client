import React, { useState } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";

const DropzoneWrapper = styled.div`
  width: 300px;
  height: 240px;
  border: 1px solid #e9ecf3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    color: #6c757d;
    line-height: 1.5rem;
  }
`;

const PlusIcon = styled(IoIosAdd)`
  width: 5rem;
  height: 5rem;
`;

const DropZone = ({ onDrop }) => {
  return (
    <Dropzone onDrop={onDrop} multiple={true}>
      {({ getRootProps, getInputProps }) => (
        <DropzoneWrapper {...getRootProps()}>
          <input {...getInputProps()} multiple />
          <p>
            최대 5개의 사진을 드래그 하거나 <br /> 이곳을 클릭하여 선택하세요.
          </p>
          <PlusIcon />
        </DropzoneWrapper>
      )}
    </Dropzone>
  );
};

export default DropZone;
