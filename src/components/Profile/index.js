import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ProductCard from "../common/ProductCard";

const ProfileWrapper = styled.div`
  width: 677px;
  margin: 0 auto;
  padding-top: 100px;
  min-height: 100vh;
  .selected {
    border-bottom: 3px solid #f76707;
    color: #f76707;
    font-weight: 600;
  }
`;

const User = styled.section`
  display: flex;
  margin: 40px 0;
  .profile-image {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .profile-nickname {
    font-size: 22px;
    font-weight: 600;
    margin-left: 40px;
  }
`;

const Detail = styled.div`
  .user-filter {
    margin: 20px 0;
    ul {
      border-bottom: 1px solid #e9ecef;
      padding-bottom: 10px;
      li {
        display: inline-block;
        font-size: 17px;
      }
    }
  }

  .user-records {
    padding-top: 20px;
  }
`;

const SLink = styled(NavLink)`
  color: #868e96;
  padding: 8px 20px;
`;

const Profile = ({ user, products, error, loading }) => {
  console.log(user);
  if (error) {
    if (error.response && error.response.status === 404) {
      return <ProfileWrapper>존재하지 않는 유저입니다.</ProfileWrapper>;
    }
    return <ProfileWrapper>오류가 발생하였습니다.</ProfileWrapper>;
  }

  if (loading || !user) {
    return <ProfileWrapper></ProfileWrapper>;
  }

  return (
    <ProfileWrapper>
      <User>
        <div className="profile-image">
          <img src={user.thumbnail} alt={user.username} />
        </div>
        <h2 className="profile-nickname">{user.username}</h2>
      </User>
      <Detail>
        <section className="user-filter">
          <ul>
            <li>
              <SLink
                to={`/${user._id}`}
                activeClassName="selected"
                exact
              >{`판매 물품 (${user.products.length})`}</SLink>
            </li>
            <li>
              <SLink
                to={`/${user._id}/review`}
                activeClassName="selected"
              >{`거래 후기 (0)`}</SLink>
            </li>
          </ul>
        </section>
        <section className="user-records">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} user={true} />
          ))}
        </section>
      </Detail>
    </ProfileWrapper>
  );
};

export default Profile;
