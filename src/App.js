import { BaseTemplate, Header, Loading, LoadingScreen, Toast } from "components";
import Popup from "components/molecules/Popup";
import { React, BrowserRouter as Router, Switch, Route } from 'libraries';
import { useEffect, useState } from "react";
import { appRoutes } from "routes";
import { addNotifications } from "services/notification";
import { getProfile } from "services/profile";

function App() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const init = async () => {
      try{
        setLoading(true);
        await getProfile();
        setLoading(false);
        addNotifications({
          type: "SUCCESS",
          title: "Hello there!",
          message: "Welcome Back",
          id: Math.random()
        })
      }catch(err){
        alert('Terjadi kesalahan!');
        setLoading(false)
      }
    };
    init();
  },[]);

  return (
  <Router>
   <BaseTemplate>
   <Toast autoDeleteInterval={6000}/>
      <Header/>
      <Switch>
        {appRoutes.map((route, index) => 
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={routeProps => (
              <React.Fragment><route.component {...routeProps} /></React.Fragment>
            )}
          />
        )}
      </Switch>
      {loading && (<Loading />)}
   </BaseTemplate>
   <LoadingScreen isActive={loading}/>
   <Popup /> 
   
  </Router>
  );
}

export default App;