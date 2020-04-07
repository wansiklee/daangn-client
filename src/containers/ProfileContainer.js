import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Profile from "../components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { detailUser, unloadUser } from "../store/modules/profile";
import { logout } from "../store/modules/user";
import LogoutButton from "../components/common/LogoutButton";

const ProfileContainer = ({ match, history }) => {
  const { userId } = match.params;
  const dispatch = useDispatch();
  const { user, products, error, loading, loggedUser } = useSelector(
    ({ profile, loading, user }) => ({
      user: profile.user,
      products: profile.products,
      error: profile.error,
      loading: loading["profile/DETAIL_USER"],
      loggedUser: user.user,
    })
  );

  useEffect(() => {
    dispatch(detailUser(userId));
    return () => {
      dispatch(unloadUser());
    };
  }, [dispatch, userId]);

  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const ownProduct =
    (user && user._id) ===
    (loggedUser && loggedUser.user && loggedUser.user._id);

  return (
    <Profile
      user={user}
      products={products}
      error={error}
      loading={loading}
      logoutButton={ownProduct && <LogoutButton onLogout={onLogout} />}
    />
  );
};

export default withRouter(ProfileContainer);
