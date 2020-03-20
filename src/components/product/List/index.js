import React from "react";
import styled from "styled-components";
import ProductCard from "../../common/ProductCard";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

const Title = styled.div`
  padding-top: 100px;
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

const ListWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  text-align: center;
`;

const MoreLink = styled.div`
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  width: calc(25% - 34px);
  margin-right: 0px;

  margin-bottom: 40px;
  transition: transform 0.3s, box-shadow 0.3s;
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

const List = ({ products, home }) => {
  return (
    <>
      {home ? <Title>당근마켓 인기 매물</Title> : <Title>중고 매물</Title>}
      <Divider />
      <ListWrapper>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
        {home && (
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
