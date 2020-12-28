import { Header } from "components";
import { React, BrowserRouter as Router, Switch, Route } from 'libraries';
import { appRoutes } from "routes";
import "tailwindcss/tailwind.css";

function App() {
  return (
   <>
    <Router>
    <Header/>
      <Switch>
        {appRoutes.map(route => <Route {...route} key={route}/>)}
      </Switch>
    </Router>
   </>
  );
}

export default App;