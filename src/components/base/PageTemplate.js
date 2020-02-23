import React from "react";
import styled from "styled-components";
import HeaderContainer from "../../containers/base/HeaderContainer";
import Footer from "./Footer";

const PageTemplateWrapper = styled.div``;

const PageTemplate = ({ className, style, children }) => {
  return (
    <PageTemplateWrapper className={className} style={style}>
      <HeaderContainer />
      {children}
      <Footer />
    </PageTemplateWrapper>
  );
};

export default PageTemplate;
