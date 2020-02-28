import React from "react";
import Header from "../../components/base/Header";
import { useDispatch } from "react-redux";
import { setScreenCover, showModal } from "../../store/modules/global";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const handleLoginButtonClick = () => {
    dispatch(setScreenCover(true));
    dispatch(showModal("login"));
  };

  return <Header onLoginButtonClick={handleLoginButtonClick} />;
};

export default HeaderContainer;
