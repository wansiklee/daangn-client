import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import AuthModal from "../../components/auth/AuthModal";
import AuthForm from "../../components/auth/AuthForm";
import { closeModal, changeModalMode } from "../../store/modules/global";
import { login, signup } from "../../store/modules/auth";
import { check } from "../../store/modules/user";
import { withRouter } from "react-router-dom";

const AuthModalContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { visible, mode, auth, authError, user } = useSelector(
    ({ global, auth, user }) => ({
      visible: global.modal.visible,
      mode: global.modal.mode,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const onClose = useCallback(() => dispatch(closeModal()), [dispatch]);
  const onChangeMode = useCallback(() => {
    const nextMode = mode === "login" ? "signup" : "login";
    dispatch(changeModalMode(nextMode));
  }, [mode]);
  const onSubmit = e => {
    e.preventDefault();
    mode === "login"
      ? dispatch(login({ email, password }))
      : dispatch(signup({ email, username, password, repeatPassword }));
  };

  // login / signup
  useEffect(() => {
    if (visible && authError) {
      setError(authError.response.data.msg);
      return;
    }
    if (visible && auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // check
  useEffect(() => {
    if (visible && user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user.user));
      } catch (e) {
        console.log(e);
      }
      onClose();
    }
  }, [history, user]);

  return (
    <AuthModal visible={visible} onClose={onClose}>
      <AuthForm
        mode={mode}
        onChangeMode={onChangeMode}
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        repeatPassword={repeatPassword}
        setRepeatPassword={setRepeatPassword}
        onSubmit={onSubmit}
        error={error}
      />
    </AuthModal>
  );
};

export default withRouter(AuthModalContainer);
