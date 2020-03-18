import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { detail } from "../../lib/api/product";
import Detail from "../../components/product/Detail";

const DetailContainer = ({ match }) => {
  const [image, setImage] = useState("");
  const [user, setUser] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState();
  const [createdAt, setCreatedAt] = useState("");
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  const {
    params: { productId }
  } = match;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const {
          data: { data }
        } = await detail(productId);

        setImage(data.image);
        setUser(data.user);
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setCategory(data.category);
        setCreatedAt(data.createdAt);
        setLikes(data.likes);
        setComments(data.comments);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, []);

  return (
    <Detail
      image={image}
      user={user}
      title={title}
      description={description}
      price={price}
      category={category}
      createdAt={createdAt}
      likes={likes}
      comments={comments}
    />
  );
};

export default withRouter(DetailContainer);
