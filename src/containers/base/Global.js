import React from "react";
import { useSelector } from "react-redux";
import ScreenCover from "../../components/common/ScreenCover";
import GlobalStyles from "../../lib/themes/GlobalStyles";

const Global = () => {
  const cover = useSelector(state => state.auth.cover);
  return (
    <>
      <ScreenCover visible={cover} />
      <GlobalStyles />
    </>
  );
};

export default Global;
