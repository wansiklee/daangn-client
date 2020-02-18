import React from "react";
import AuthTemplate from "../../components/auth/AuthTemplate";
import AuthForm from "../../components/auth/AuthForm";

const Signup = () => {
  return (
    <AuthTemplate>
      <AuthForm type="signup" />
    </AuthTemplate>
  );
};

export default Signup;
