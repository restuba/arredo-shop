import { BaseTemplate, Header } from "components";
import { React, BrowserRouter as Router, Switch, Route } from 'libraries';
import { appRoutes } from "routes";

function App() {
  return (
   <BaseTemplate>
    <Router>
      <Header/>
      <Switch>
        {appRoutes.map(route => <Route {...route} key={route}/>)}
      </Switch>
    </Router>
   </BaseTemplate>
  );
}

export default App;