import actionType from './actionType';

/**
 * an Action for set notification reducer
 * @param {*} value
 */
export const addNotification = value => ({
  type: actionType.ADD_NOTIFICATION,
  value
});


/**
 * an Action for remove notification reducer
 * @param {*} value
 */
export const removeNotification = value => ({
  type: actionType.DELETE_NOTIFICATION,
  value
})