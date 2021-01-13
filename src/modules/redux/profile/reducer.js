import actionType from './actionType';

const initialState = null;

export const profile = (state = initialState, action) => {
  switch(action.type){
    case actionType.SET_PROFILE:
      return{
        ...state,
        ...action.value
      };
    case actionType.CLEAR_PROFILE:
      return initialState;
    default:
      return state;
  }
};