import actionType from './actionType';

const initailState = [];

export const notification = (state = initailState, action) => {
  switch(action.type){
    case actionType.ADD_NOTIFICATION:
      return [...state, action.value];
    case actionType.DELETE_NOTIFICATION:
      return state.filter(
        (notification) => notification.id !== action.value
      );
    default:
      return state;
  }
}