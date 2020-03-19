import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../lib/api/product";
import List from "../../components/product/List";

const ListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {
          data: { data }
        } = await getAllProducts();
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);
  return <List products={data} />;
};

export default ListContainer;
