import { baseUrl } from './url';
import { ApiRequest } from './config';

export const API = {};

// Auth
// API.login = ApiRequest.post(baseUrl.auth.login);

// Products
API.getProducts = ApiRequest.get(baseUrl.products.product);