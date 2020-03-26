import client from "./client";

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
export const getAllProducts = async category => {
  return category
    ? await client.get(`/api/products?category=${category}`)
    : await client.get(`/api/products`);
};

// Product Search
export const getSearchProducts = async ({ term, page }) => {
  return await client.get(`/api/products/search?term=${term}&page=${page}`);
};
