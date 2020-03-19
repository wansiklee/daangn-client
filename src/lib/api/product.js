import client from "./client";

// Upload image
export const uploadImage = async ({ formData }) => {
  return await client.post("/api/upload", formData, {
    headers: { "content-type": "multipart/form-data" }
  });
};

// Upload
export const productUpload = async ({
  image,
  title,
  category,
  price,
  description
}) => {
  return await client.post("/api/products", {
    image,
    title,
    category,
    price,
    description
  });
};

// Product Detail
export const getProduct = async id => {
  return await client.get(`/api/products/${id}`);
};

// Product List
export const getAllProducts = async () => {
  return await client.get(`/api/products`);
};
