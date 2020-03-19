import styled from "styled-components";

export const DetailWrapper = styled.div`
  max-width: 680px;
  padding-top: 100px;
  margin: 0 auto;
`;

export const Image = styled.div`
  width: 677px;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Profile = styled.div`
  width: 677px;
  margin: 0 auto;
  .profile-wrapper {
    text-decoration: none;
    margin-top: 25px;
    padding-bottom: 23px;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    justify-content: space-between;
    .profile-align {
      display: flex;
      flex-direction: row;
      align-items: center;
      .profile-image {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .profile-left {
        margin-left: 8px;
        .username {
          font-weight: 600;
          line-height: 1.5;
          color: #212529;
        }
      }
    }
  }
`;

export const Description = styled.div`
  padding: 32px 0;
  width: 677px;
  margin: 0 auto;
  border-bottom: 1px solid #e9ecef;
  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
  }
  .category {
    margin-top: 4px;
    font-size: 13px;
    line-height: 1.46;
    color: #868e96;
  }
  .price {
    margin-top: 4px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.76;
  }
  .description {
    margin-bottom: 16px;
    margin-top: 8px;
    p {
      font-size: 17px;
      line-height: 1.6;
      margin: 16px 0;
    }
  }
  .counts {
    font-size: 13px;
    line-height: 1.46;
    color: #868e96;
  }
`;
