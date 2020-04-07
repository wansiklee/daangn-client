import client from "./client";

// Login
export const login = ({ email, password }) =>
  client.post("/api/auth/login", { email, password });

// Signup
export const signup = ({ email, username, password, repeatPassword }) =>
  client.post("/api/auth/signup", {
    email,
    username,
    password,
    repeatPassword,
  });

// Check
export const check = () => client.get("/api/auth/check");

// Logout
export const logout = () => client.post("/api/auth/logout");
