import {
  BrowserRouter,
  Route,
  Routes,
  Suspense,
  React,
  HelmetProvider,
} from "libraries";
import { BaseTemplate, Toast, Header, Popup } from "components";
import { routes } from "./routes";
import { useEffect } from "libraries";
import { getProfile } from "services/profile";
import { addNotifications } from "services";

export const Pages = () => {

  useEffect(() => {
    const init = async () => {
      try{
        await getProfile();
        addNotifications({
          type: "SUCCESS",
          title: "Hello there!",
          message: "Welcome Back",
          id: Math.random()
        })
      }catch(err){
        // alert('Terjadi kesalahan!');
        console.dir(err)
      }
    };
    init();
  },[]);

  return (
    <HelmetProvider>
      <Suspense>
        <BrowserRouter>
          <BaseTemplate>
            <Toast autoDeleteInterval={6000} />
            <Header />
            <Routes>
              {routes.map((route) => {
                return (
                  <Route
                    path={route.path}
                    element={route.component}
                    key={route.path}
                  />
                );
              })}
            </Routes>
          </BaseTemplate>
          <Popup />
        </BrowserRouter>
      </Suspense>
    </HelmetProvider>
  );
};
