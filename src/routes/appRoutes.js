import { Home, Shop, Product, Cart, Checkout, Login, Register } from 'components/pages';

export const appRoutes = [
  {
    name: "Register",
    component: Register,
    exact: true,
    path: "/register",
    auth: false
  },
  {
    name: "Login",
    component: Login,
    exact: true,
    path: "/login",
    auth: false
  },
  {
    name: "Checkout",
    component: Checkout,
    exact: true,
    path: "/checkout",
    auth: false
  },
  {
    name: "Cart",
    component: Cart,
    exact: true,
    path: "/cart",
    auth: true
  },
  {
    name: "Product",
    component: Product,
    exact: true,
    path: "/product/:slug",
    auth: false
  },
  {
    name: "Shop",
    component: Shop,
    exact: true,
    path: "/shop",
    auth: false
  },
  {
    name: "Home",
    component: Home,
    exact: true,
    path: "/",
    auth: false
  }
];