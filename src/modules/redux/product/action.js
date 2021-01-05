import { actionType } from "./actionType";

/**
 * an Action for set product data
 * @param {*} value a value require array object of product data
 */
export const setProduct = () => ({
  type: actionType.SET_PRODUCT
});

/**
 * an Action for clear products data
 */

export const clearProduct = () => ({
  type: actionType.CLEAR_PRODUCT
})

/**
 * an Action for set products data
 * @param {*} value a value require array object of products data
 */
export const setProducts = value => ({
  type: actionType.SET_PRODUCTS,
  value
})

/**
 * an Action for clear products data
 */

 export const clearProducts = () => ({
   type: actionType.CLEAR_PRODUCTS
 })

 /**
  * ac Action for set featured data
  */

  export const setFeatured = value => ({
    type: actionType.SET_FEATURED,
    value
  })