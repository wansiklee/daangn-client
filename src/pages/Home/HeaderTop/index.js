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
            <a href="#">
              <span>오늘의 인기 검색어</span>
            </a>
          </TopKeywordsTitle>
          <TopKeywordsList>
            <li>
              <a href="#">
                <KeyWordsText>마스크</KeyWordsText>
                <Rank>
                  <span color={false}>-</span>
                </Rank>
              </a>
            </li>
            <li>
              <a href="#">
                <KeyWordsText>자전거</KeyWordsText>
                <Rank>
                  <span color={true}>NEW</span>
                </Rank>
              </a>
            </li>
          </TopKeywordsList>
        </TopKeywords>
      </HeaderTitleWrapper>
    </HeaderTop>
  );
};
