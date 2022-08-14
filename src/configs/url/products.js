import { urlBuilder } from "utils";

export const products = {
  main: "/products/*",
  detail: "/:slug",
  search: {
    main: "/search/*",
  },
};

export const productsURL = () => {
  return new Proxy(products, urlBuilder("/products"));
};
