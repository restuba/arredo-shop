import { clearPopup, setPopup } from "modules/redux/popup/action";
import { store } from 'modules';

const { dispatch }  = store;
const state = store.getState();

/**
 * a Service for showing popup
 * @param {*} payload a payload require state of popup reducer
 */
export const showPopup = (payload = {}) => {
  const { popup } = state;
  console.log('from service',payload)

  // clearing popup state in reducer
  if(popup.show){
    dispatch(clearPopup());
  }
  dispatch(setPopup({...payload, show: true}));
  return payload;
}


/**
 * a Service for hiding popup
 */
export const hidePopup = () => {
  dispatch(clearPopup());
  return true;
}