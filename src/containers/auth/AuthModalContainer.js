import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import AuthModal from "../../components/auth/AuthModal";
import AuthForm from "../../components/auth/AuthForm";
import { closeModal, changeModalMode } from "../../store/modules/global";
import { login, signup } from "../../store/modules/auth";
import { check } from "../../store/modules/user";

const AuthModalContainer = () => {
  const { visible, mode, auth, authError, user, userError } = useSelector(
    ({ global, auth, user }) => ({
      visible: global.modal.visible,
      mode: global.modal.mode,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
      userError: user.userError
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const onClose = useCallback(() => dispatch(closeModal()), [dispatch]);
  const onChangeMode = useCallback(() => {
    const nextMode = mode === "login" ? "signup" : "login";
    dispatch(changeModalMode(nextMode));
  }, [mode]);
  const onSubmit = ({ email, username, password, repeatPassword }) => {
    mode === "login"
      ? dispatch(login({ email, password }))
      : dispatch(signup({ email, username, password, repeatPassword }));
  };

  // login / signup
  useEffect(() => {
    if (authError) {
      console.log("오류발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // check
  useEffect(() => {
    if (user) {
      console.log("user check 성공");
      console.log(user);
    }
  }, [user]);

  return (
    <AuthModal visible={visible} onClose={onClose}>
      <AuthForm mode={mode} onChangeMode={onChangeMode} onSubmit={onSubmit} />
    </AuthModal>
  );
};

export default AuthModalContainer;
