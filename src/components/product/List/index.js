import React from "react";
import styled from "styled-components";
import ProductCard from "../../common/ProductCard";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { getCategoryName } from "../../../lib/utils";

const Title = styled.div`
  padding-top: 120px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.6px;
  text-align: center;
  margin-bottom: 40px;
`;

const Divider = styled.div`
  width: 70px;
  border-top: 2px solid #ff8a3d;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const Order = styled.div`
  width: 980px;
  margin: 0 auto;
  text-align: right;
  margin-bottom: 30px;
  select {
    appearance: none;
    border: solid 1px #e9ecef;
    border-radius: 100px;
    padding: 10px 44px 10px 20px;
    font-size: 17px;
    letter-spacing: -0.6px;
    text-align: left;
    background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-arrow-down-2d404f1988c159b270a18a0bb46b119f0065d38c18c1efc0b51d0d8c0af990f2.png)
      no-repeat 89% 50%;
    &:hover {
      color: #98a8b9;
    }
  }
`;

const NoProducts = styled.h1`
  width: 980px;
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  margin-bottom: 100px;
`;

const ListWrapper = styled.div`
  min-height: 100vh;
  width: 980px;
  margin: 0 auto;
`;

const MoreLink = styled.div`
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  width: calc(25% - 34px);
  margin-right: 0px;

  margin-bottom: 40px;
  transition: transform 0.3s, box-shadow 0.3s;
  vertical-align: top;
  text-align: center;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 16px -3px rgba(20, 20, 50, 0.12);
  }
  a {
    text-decoration: none;
    color: #212529;
  }
  .more-text {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.6px;
    padding: 60px 0;
    .text {
      padding-top: 15px;
    }
  }
`;

const PlusIcon = styled(IoIosAdd)`
  width: 50px;
  height: 50px;
`;

const List = ({
  products,
  error,
  home,
  categoryOptions,
  category,
  onCategoryChange,
  loading
}) => {
  if (error) {
    return <ListWrapper>오류가 발생하였습니다.</ListWrapper>;
  }

  if (loading || !products) {
    return <ListWrapper></ListWrapper>;
  }

  return (
    <>
      {home ? <Title>당근마켓 인기 매물</Title> : <Title>인기 중고 매물</Title>}
      <Divider />
      {!home && (
        <Order>
          <select value={category} onChange={onCategoryChange}>
            <option>카테고리 선택</option>
            {categoryOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Order>
      )}
      {products && products.data.length === 0 ? (
        <NoProducts>{`${getCategoryName(
          category
        )} 매물이 아직 없습니다. ㅠㅠ`}</NoProducts>
      ) : null}
      <ListWrapper>
        {products &&
          products.data.map((p, i) => <ProductCard key={i} product={p} />)}
        {home && products && products.data.length !== 0 && (
          <MoreLink>
            <Link to={"/products"}>
              <div className="more-text">
                <PlusIcon />
                <div className="text">
                  당근마켓
                  <br />
                  중고 매물
                  <br />더 보기
                </div>
              </div>
            </Link>
          </MoreLink>
        )}
      </ListWrapper>
    </>
  );
};

export default List;
