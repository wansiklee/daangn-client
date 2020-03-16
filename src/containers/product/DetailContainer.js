import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { detail } from "../../lib/api/product";
import Detail from "../../components/product/Detail";

const DetailContainer = ({ match }) => {
  const {
    params: { productId }
  } = match;

  useEffect(() => {
    const fetchProduct = async () => {
      const {
        data: { data }
      } = await detail(productId);
      console.log(data);
    };
    fetchProduct();
  }, []);

  return <Detail />;
};

export default withRouter(DetailContainer);
