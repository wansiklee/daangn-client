import client from "./client";

// Upload image
export const uploadImage = async ({ formData }) => {
  return await client.post("/api/upload", formData, {
    headers: { "content-type": "multipart/form-data" }
  });
};

// Upload
export const upload = async ({
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
