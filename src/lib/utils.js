import moment from "moment";
import "moment/locale/ko";

export const getCategoryName = categoryNumber => {
  switch (categoryNumber) {
    case 0:
      return "디지털/가전";
    case 1:
      return "가구/인테리어";
    case 2:
      return "유아동/유아도서";
    case 3:
      return "생활/가공식품";
    case 4:
      return "여성의류";
    case 5:
      return "여성잡화";
    case 6:
      return "뷰티/미용";
    case 7:
      return "남성패션/잡화";
    case 8:
      return "스포츠/레저";
    case 9:
      return "게임/취미";
    case 10:
      return "도서/티켓/음반";
    case 11:
      return "반려동물용품";
    case 12:
      return "기타 중고물품";
    default:
      return "";
  }
};

export const getTimeFromNow = createdAt => {
  return moment(createdAt).fromNow();
};

export const getPriceComma = price => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return price.toString().replace(regexp, ",");
};
