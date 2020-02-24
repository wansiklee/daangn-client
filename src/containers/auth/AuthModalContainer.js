import React, { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import AuthModal from "../../components/auth/AuthModal";
import AuthForm from "../../components/auth/AuthForm";
import { closeModal } from "../../store/modules/auth";

const AuthModalContainer = () => {
  const { visible, mode } = useSelector(
    state => ({
      visible: state.auth.modal.visible,
      mode: state.auth.modal.mode
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const onClose = useCallback(() => dispatch(closeModal()), [dispatch]);

  return (
    <AuthModal visible={visible} onClose={onClose}>
      <AuthForm mode={mode} />
    </AuthModal>
  );
};

export default AuthModalContainer;
