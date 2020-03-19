import React, { useEffect } from "react";
import { getAllProducts } from "../../lib/api/product";

const ListContainer = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {
          data: { data }
        } = await getAllProducts();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);
  return <div style={{ paddingTop: 100 }}>Products List</div>;
};

export default ListContainer;
