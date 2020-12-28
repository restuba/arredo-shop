import { Home, Shop, Product, Cart, Checkout } from 'components/pages';

export const appRoutes = [
  {
    name: "Checkout",
    component: Checkout,
    exact: true,
    path: "/checkout"
  },
  {
    name: "Cart",
    component: Cart,
    exact: true,
    path: "/cart"
  },
  {
    name: "Product",
    component: Product,
    exact: true,
    path: "/product/:slug"
  },
  {
    name: "Shop",
    component: Shop,
    exact: true,
    path: "/shop"
  },
  {
    name: "Home",
    component: Home,
    exact: true,
    path: "/"
  }
];