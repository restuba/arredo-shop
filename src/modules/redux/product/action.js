import { actionType } from "./actionType";

export const getProduct = value => ({
  type: actionType.GET_PRODUCT
});

export const getProducts = value => ({
  type: actionType.GET_PRODUCTS
})