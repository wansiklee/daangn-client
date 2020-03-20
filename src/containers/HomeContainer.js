import React, { useState, useEffect } from "react";
import { getAllProducts } from "../lib/api/product";
import Home from "../components/Home";

const HomeContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {
          data: { data }
        } = await getAllProducts();
        setData(data.slice(0, 10));
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);
  return <Home products={data} />;
};

export default HomeContainer;
