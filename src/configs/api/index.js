import { baseUrl } from './url';
import { ApiRequest } from './config';

export const API = {};

// Products
API.getProducts = ApiRequest.get(baseUrl.products.product);