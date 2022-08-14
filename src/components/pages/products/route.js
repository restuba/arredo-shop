import { products } from "configs";
import { lazy } from "react";

const RouteComp = (lazyImport) => {
  const Component = lazy(() => {
    return lazyImport;
  });
  return <Component />;
};

export const routes = [
  {
    path: products.detail,
    component: RouteComp(import("./detail")),
  },
  {
    path: products.main,
    component: RouteComp(import("./main")),
  },
  {
    path: products.search.main,
    component: RouteComp(import("./search")),
  },
  {
    path: "/",
    component: RouteComp(import("./main")),
  },
];
