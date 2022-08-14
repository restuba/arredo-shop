import { urlBuilder } from "utils";

export const checkout = {
  main: "/checkout",
};

export const checkoutURL = () => {
  return new Proxy(checkout, urlBuilder("/checkout"));
};
