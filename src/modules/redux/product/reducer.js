import { actionType } from './actionType';

const initialState = {
  product: [],
  products: []
}

export const product = (state = initialState, action) => {
  switch(action.type){
    case actionType.GET_PRODUCT:
      return {
        ...state,
        product: action.value
      }
    case actionType.GET_PRODUCTS:
      return {
        ...state,
        products: action.value
      }
    default:
      return state
  }
}