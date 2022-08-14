import { React, Routes, Route } from "libraries";
import { routes } from "./route";

const index = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.component} />
        );
      })}
    </Routes>
  );
};

export default index;
