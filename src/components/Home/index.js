import React from "react";
import HeaderTop from "./HeaderTop";
import Introduction from "./Introduction";
import Reviews from "./Reviews";

const Home = ({ hotProducts }) => {
  return (
    <>
      <HeaderTop />
      {hotProducts}
      <Introduction />
      <Reviews />
    </>
  );
};

export default Home;
