import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import AuthModal from "../../components/auth/AuthModal";
import AuthForm from "../../components/auth/AuthForm";
import { closeModal, changeModalMode } from "../../store/modules/global";
import { login, signup } from "../../store/modules/auth";

const AuthModalContainer = () => {
  const { visible, mode, auth, authError } = useSelector(
    ({ global, auth }) => ({
      visible: global.modal.visible,
      mode: global.modal.mode,
      auth: auth.auth,
      authError: auth.authError
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

  useEffect(() => {
    if (authError) {
      console.log("오류발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("성공");
      console.log(auth);
      return;
    }
  }, [auth, authError]);

  return (
    <AuthModal visible={visible} onClose={onClose}>
      <AuthForm mode={mode} onChangeMode={onChangeMode} onSubmit={onSubmit} />
    </AuthModal>
  );
};

export default AuthModalContainer;
