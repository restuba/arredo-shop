import { store, addNotification, removeNotification } from "modules";

const { dispatch } = store;
// const state = store.getState();

/**
 * a Service for add notification
 * @param {*} payload a value require state of notification reducer
 */
export const addNotifications = (payload = {}) => {
  dispatch(addNotification(payload));
  return payload;
};

/**
 * a Service for remove notification
 * @param {*} payload a value require state of notification reducer
 */
export const removeNotifications = (payload = {}) => {
  dispatch(removeNotification(payload));
  return payload;
};
