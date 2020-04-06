import React from "react";
import {
  DetailWrapper,
  Image,
  ProfileLink,
  Profile,
  Description,
} from "./style";
import {
  getCategoryName,
  getTimeFromNow,
  getPriceComma,
} from "../../../lib/utils";
import { Link } from "react-router-dom";

const Detail = ({ product, loading, error, actionButton }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <DetailWrapper>존재하지 않는 상품입니다.</DetailWrapper>;
    }
    return <DetailWrapper>오류가 발생하였습니다.</DetailWrapper>;
  }

  if (loading || !product) {
    return <DetailWrapper></DetailWrapper>;
  }

  const {
    image,
    user,
    title,
    category,
    createdAt,
    price,
    description,
    likes,
    comments,
  } = product.data;

  return (
    <DetailWrapper>
      <Image>
        <Link to={`/products/${product && product.data._id}`}>
          <img src={image} />
        </Link>
      </Image>
      <Profile>
        <div className="profile-wrapper">
          <ProfileLink to={`/users/${user._id}`}>
            <div className="profile-image">
              <img src={user.thumbnail} />
            </div>
            <div className="profile-left">
              <div className="username">{user.username}</div>
            </div>
          </ProfileLink>
        </div>
      </Profile>
      <Description>
        <h1>{title}</h1>
        <p className="category">
          {getCategoryName(category) + " ∙ "}
          <time>{getTimeFromNow(createdAt)}</time>
        </p>
        <p className="price">{`${getPriceComma(price)}원`}</p>
        <div className="description">
          <p>{description}</p>
        </div>
        <p className="counts">
          {`관심 ${likes.length} ∙ 댓글 ${comments.length}`}
        </p>
        {actionButton}
      </Description>
    </DetailWrapper>
  );
};

export default Detail;
