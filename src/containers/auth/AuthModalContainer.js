import React, { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import AuthModal from "../../components/auth/AuthModal";
import { closeModal } from "../../store/modules/auth";

const AuthModalContainer = () => {
  const { visible } = useSelector(
    state => ({
      visible: state.auth.modal.visible
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const onClose = useCallback(() => dispatch(closeModal()), [dispatch]);

  return <AuthModal visible={visible} onClose={onClose} />;
};

export default AuthModalContainer;
