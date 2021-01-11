import { actionType } from './actionType';

const initialState = {
  product: [],
  products: [],
  featuredProducts: [],
  detailProduct: []
}

export const product = (state = initialState, action) => {
  switch(action.type){
    case actionType.SET_PRODUCT:
      return {
        ...state,
        product: action.value
      }
    case actionType.CLEAR_PRODUCT:
      return{ 
        ...state,
        product: initialState.product
      }
    case actionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.value
      }
    case actionType.CLEAR_PRODUCTS:
      return {
        ...state,
        products: initialState.products
      }
    case actionType.SET_FEATURED:
      return {
        ...state,
        featuredProducts: action.value
      }
    case actionType.SET_DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: action.value
      }
    default:
      return state
  }
}