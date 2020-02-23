import React from "react";
import Header from "../../components/base/Header";
import { useDispatch } from "react-redux";
import { setScreenCover, showAuthModal } from "../../store/modules/auth";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const handleLoginButtonClick = () => {
    dispatch(setScreenCover(true));
    dispatch(showAuthModal("login"));
  };

  return <Header onLoginButtonClick={handleLoginButtonClick} />;
};

export default HeaderContainer;
