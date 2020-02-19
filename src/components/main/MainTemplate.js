import React from "react";
import styled from "styled-components";
import PageTemplate from "../base/PageTemplate";

const MainTemplateWrapper = styled(PageTemplate)``;

const MainTemplate = ({ children }) => {
  return <MainTemplateWrapper>{children}</MainTemplateWrapper>;
};

export default MainTemplate;
