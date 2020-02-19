import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const PageTemplateWrapper = styled.div``;

const PageTemplate = ({ className, style, children }) => {
  return (
    <PageTemplateWrapper className={className} style={style}>
      <Header />
      {children}
      <Footer />
    </PageTemplateWrapper>
  );
};

export default PageTemplate;
