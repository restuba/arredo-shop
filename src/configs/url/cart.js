import { urlBuilder } from "utils";

export const cart = {
  main: "/cart",
};

export const cartURL = () => {
  return new Proxy(cart, urlBuilder("/cart"));
};
