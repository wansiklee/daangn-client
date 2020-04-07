import React from "react";
import AskModal from "./AskModal";

const AskLogoutModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="로그아웃"
      description="정말 로그아웃 하시겠습니까?"
      confirmText="로그아웃"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskLogoutModal;
