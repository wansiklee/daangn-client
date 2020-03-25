import React from "react";
import {
  HeaderTop,
  HeaderTitleWrapper,
  HeaderTitle,
  HeaderTitleDesc,
  HeaderImage,
  TopKeywords,
  TopKeywordsTitle,
  TopKeywordsList,
  KeyWordsText,
  Rank
} from "./style";
import { Link } from "react-router-dom";

export default () => {
  return (
    <HeaderTop>
      <HeaderTitleWrapper>
        <HeaderTitle>우리 동네 중고 직거래 마켓</HeaderTitle>
        <HeaderTitleDesc>
          동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
        </HeaderTitleDesc>
        <HeaderImage></HeaderImage>
        <TopKeywords>
          <TopKeywordsTitle>
            <Link to="/">
              <span>오늘의 인기 검색어</span>
            </Link>
          </TopKeywordsTitle>
          <TopKeywordsList>
            <li>
              <Link to="/">
                <KeyWordsText>마스크</KeyWordsText>
                <Rank>
                  <span color={false}>-</span>
                </Rank>
              </Link>
            </li>
            <li>
              <Link to="/">
                <KeyWordsText>자전거</KeyWordsText>
                <Rank>
                  <span color={true}>NEW</span>
                </Rank>
              </Link>
            </li>
          </TopKeywordsList>
        </TopKeywords>
      </HeaderTitleWrapper>
    </HeaderTop>
  );
};
