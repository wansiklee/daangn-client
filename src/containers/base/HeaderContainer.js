import React, { useState } from "react";
import Header from "../../components/base/Header";
import { useSelector, useDispatch } from "react-redux";
import { setScreenCover, showModal } from "../../store/modules/global";
import { withRouter } from "react-router-dom";

const HeaderContainer = ({ history }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleLoginButtonClick = () => {
    dispatch(setScreenCover(true));
    dispatch(showModal("login"));
  };

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (value === "") {
      return;
    }
    history.push(`/search?term=${value}`);
  };

  return (
    <Header
      onLoginButtonClick={handleLoginButtonClick}
      user={user}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(HeaderContainer);
