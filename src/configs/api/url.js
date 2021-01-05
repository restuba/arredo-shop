import { appConfig } from "configs/appConfig";

export const config = appConfig;

export const baseUrl = {
  products: {
    product: `${config.url.api}/products`
  }
};