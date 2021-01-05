import { handleAsync } from "utils"
import { API } from 'configs';  
import { store, setProducts, setFeatured } from 'modules';

const { dispatch } = store;

/**
 * a Service for get user products
 */

export const getProducts = async () => {
  const [res, err] = await handleAsync(API.getProducts());
  if(err) throw err;
  dispatch(setProducts(res))
  return res;
}

/**
 * a Service for get featured products
 */

 export const getFeatured = (data) => {
   const filter = data.filter(item => item.featured === true);
   console.log(filter)
   dispatch(setFeatured(filter))
   return filter;
 }