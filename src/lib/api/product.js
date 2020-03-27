import client from "./client";
import qs from "qs";

// Upload image
export const uploadImage = async ({ formData }) => {
  return await client.post("/api/upload", formData, {
    headers: { "content-type": "multipart/form-data" }
  });
};

// Upload
export const productUpload = ({ image, title, category, price, description }) =>
  client.post("/api/products", {
    image,
    title,
    category,
    price,
    description
  });

// Product Detail
export const getProduct = id => client.get(`/api/products/${id}`);

// Product List
export const getAllProducts = ({ category, page }) => {
  const queryString = qs.stringify({ category, page });
  return client.get(`/api/products?${queryString}`);
};

// Product Search
export const getSearchProducts = async ({ term, page }) => {
  return await client.get(`/api/products/search?term=${term}&page=${page}`);
};
