import client from "./client";

// User Detail
export const getUser = (id) => client.get(`/api/users/${id}`);
