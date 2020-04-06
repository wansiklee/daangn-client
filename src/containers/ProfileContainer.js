import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Profile from "../components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { detailUser, unloadUser } from "../store/modules/profile";

const ProfileContainer = ({ match }) => {
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

  return (
    <Profile user={user} products={products} error={error} loading={loading} />
  );
};

export default withRouter(ProfileContainer);
