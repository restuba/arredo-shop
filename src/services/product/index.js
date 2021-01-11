import { handleAsync } from "utils"
import { API } from 'configs';  
import { store, setProducts, setFeatured, setDetail } from 'modules';

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
  dispatch(setFeatured(filter))
  return filter;
}

 /**
  * a Service for get detail product
  */
export const getDetailProduct = (data, slug) => {
  const detail = data.find(item => item.slug === slug)
  dispatch(setDetail(detail));
  return detail;
}
