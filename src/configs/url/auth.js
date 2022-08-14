import { urlBuilder } from "utils";

export const auth = {
  main: "/auth/*",
  login: "/login",
  register: "/register",
  forgot_password: "/forgot-password",
  new_password: "/new-password",
};

export const authURL = () => {
  return new Proxy(auth, urlBuilder("/auth"));
};
