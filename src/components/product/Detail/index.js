import React from "react";
import { DetailWrapper, Image, Profile, Description } from "./style";
import { getCategoryName } from "../../../lib/utils";
import moment from "moment";
import "moment/locale/ko";

const Detail = ({
  image,
  user,
  title,
  description,
  price,
  category,
  createdAt,
  likes,
  comments
}) => {
  return (
    <DetailWrapper>
      <Image>
        <a>
          <img src={image} />
        </a>
      </Image>
      <Profile>
        <div className="profile-wrapper">
          <div className="profile-align">
            <div className="profile-image">
              <img src={user.thumbnail} />
            </div>
            <div className="profile-left">
              <div className="username">{user.username}</div>
            </div>
          </div>
        </div>
      </Profile>
      <Description>
        <h1>{title}</h1>
        <p className="category">
          {getCategoryName(category) + " ∙ "}
          <time>{moment(createdAt).fromNow()}</time>
        </p>
        <p className="price">{`${price}원`}</p>
        <div className="description">
          <p>{description}</p>
        </div>
        <p className="counts">
          {`관심 ${likes.length} ∙ 댓글 ${comments.length}`}
        </p>
      </Description>
    </DetailWrapper>
  );
};

export default Detail;
