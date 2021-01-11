import { BaseTemplate, Header, Loading } from "components";
import { React, BrowserRouter as Router, Switch, Route } from 'libraries';
import { useEffect, useState } from "react";
import { appRoutes } from "routes";
import { getProfile } from "services/profile";

function App() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const init = async () => {
      try{
        await getProfile();
      }catch(err){
        alert('Terjadi kesalahan!')
      }
      setLoading(false)
    };
    init();
  },[]);

  return (
  <Router>
   <BaseTemplate>
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
  </Router>
  );
}

export default App;