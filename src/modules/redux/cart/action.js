import { actionType } from './actionType';

/**
 * an Action for increase cart state
 * @param {*} value a value require array object of product data
 */
export const increaseCart = value => ({
  type: actionType.INCREACE,
  value
});


/**
 * an Action for decrease cart state
 * @param {*} value a value require array object of product data
 */
export const decreaseCart = value => ({
  type: actionType.DECREASE,
  value
});


/**
 * an Action for add product data
 * @param {*} value a value require array object of product data
 */
export const addToCart = value => ({
  type: actionType.ADD_PRODUCT,
  value
});


/**
 * an Action for remove product data
 * @param {*} value a value require array object of product data
 */
export const removeFromCart = value => ({
  type: actionType.REMOVE_PRODUCT,
  value
});


/**
 * an Action for clear product data
 * @param {*} value a value require array object of product data
 */
export const clearCart = () => ({
  type: actionType.CLEAR_CART
});


/**
 * an Action for handle checkout
 * @param {*} value a value require array object of product data
 */
export const handleCheckout = () => ({
  type: actionType.HANDLE_CHECKOUT
});