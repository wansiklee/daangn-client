import React from "react";
import HeaderTop from "./HeaderTop";
import HotProducts from "./HotProducts";
import Introduction from "./Introduction";
import Reviews from "./Reviews";

const Home = ({ products }) => {
  return (
    <>
      <HeaderTop />
      <HotProducts products={products} />
      <Introduction />
      <Reviews />
    </>
  );
};

export default Home;
