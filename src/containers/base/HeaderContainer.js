import React from "react";
import Header from "../../components/base/Header";
import { useSelector, useDispatch } from "react-redux";
import { setScreenCover, showModal } from "../../store/modules/global";

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  const handleLoginButtonClick = () => {
    dispatch(setScreenCover(true));
    dispatch(showModal("login"));
  };

  return <Header onLoginButtonClick={handleLoginButtonClick} user={user} />;
};

export default HeaderContainer;
