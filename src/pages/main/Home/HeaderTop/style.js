import styled from "styled-components";

export const HeaderTop = styled.section`
  position: relative;
  background-color: #f1f3f5;
  color: #212529;
`;

export const HeaderTitleWrapper = styled.div`
  position: relative;
  width: 980px;
  margin: 0 auto;
  padding-top: 200px;
  padding-bottom: 431px;
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.6px;
`;

export const HeaderTitleDesc = styled.p`
  text-align: center;
  margin-top: 8px;
  font-size: 17px;
  line-height: 1.6;
  letter-spacing: -0.6px;
`;

export const HeaderImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url("https://d1unjqcospf8gs.cloudfront.net/assets/home/base/phone-ee2960c1cbf1e932ac291ad59eacc55ef6dc3cab3e9e4ea4284c4e0256bb9f4c.png");
  background-size: 760px 396px;
  width: 760px;
  height: 396px;
`;

export const TopKeywords = styled.section`
  position: absolute;
  top: 280px;
  left: 770px;
  color: #212529;
`;

export const TopKeywordsTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.6px;
  color: #212529;
  text-align: center;
  a {
    display: block;
    font-size: 17px;
    font-weight: bold;
    text-align: left;
    color: #212529;
    text-decoration: none;
    padding: 16px 0;
    border-bottom: 1px solid #868e96;
    span {
      margin-right: 66px;
    }
  }
`;

export const TopKeywordsList = styled.ul`
  margin: 24px 0;
  list-style-type: none;
  color: #212529;
  li {
    &::before {
      content: counter(item);
      display: inline-block;
      line-height: 1;
      font-size: 17px;
      font-weight: bold;
      margin-right: 8px;
    }
    counter-increment: item;
    display: flex;
    font-size: 17px;
    font-weight: normal;
    line-height: 1;
    margin: 20px 0;
    position: relative;
    a {
      color: #212529;
      text-decoration: none;
      -webkit-box-flex: 1;
      flex: 1;
      display: block;
    }
  }
`;

export const KeyWordsText = styled.p`
  display: inline-block;
`;

export const Rank = styled.p`
  -webkit-box-flex: 0;
  flex: none;
  position: absolute;
  right: 8px;
  top: 0;
  line-height: 1;
  span {
    color: ${props => (props.children.props.color ? "#e03131" : "#212529")};
    display: inline-block;
    vertical-align: middle;
    font-size: 13px;
  }
`;
