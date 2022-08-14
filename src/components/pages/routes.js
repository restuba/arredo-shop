import { auth, general, checkout, cart, products } from "configs";
import { lazy } from "libraries";

const RouteComp = (lazyImport) => {
  const Component = lazy(() => {
    return lazyImport;
  });
  return <Component />;
};

export const routes = [
  {
    path: auth.register,
    component: RouteComp(import("./register")),
    auth: false,
  },
  {
    path: auth.login,
    component: RouteComp(import("./login")),
    auth: false,
  },
  {
    path: checkout.main,
    component: RouteComp(import("./checkout")),
    auth: true,
  },
  {
    path: cart.main,
    component: RouteComp(import("./cart")),
    auth: true,
  },
  {
    path: products.main,
    component: RouteComp(import("./products")),
    auth: false,
  },
  {
    path: general.about,
    component: RouteComp(import("./about")),
    auth: false,
  },
  {
    path: general.favorite,
    component: RouteComp(import("./favorite")),
    auth: false,
  },
  {
    path: general.home,
    component: RouteComp(import("./home")),
    auth: false,
  },
  {
    path: "/*",
    component: RouteComp(import("./home")),
    auth: false,
  },
];
