import React from "react";
import { useSelector } from "react-redux";
import ScreenCover from "../../components/common/ScreenCover";
import AuthModalContainer from "../auth/AuthModalContainer";
import GlobalStyles from "../../lib/themes/GlobalStyles";

const Global = () => {
  const cover = useSelector(state => state.auth.cover);
  return (
    <>
      <ScreenCover visible={cover} />
      <AuthModalContainer />
      <GlobalStyles />
    </>
  );
};

export default Global;
