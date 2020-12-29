import { BaseTemplate, Header, MainTemplate } from "components";
import { React, BrowserRouter as Router, Switch, Route } from 'libraries';
import { appRoutes } from "routes";

function App() {
  return (
   <BaseTemplate>
    <Router>
      <Header/>
      <MainTemplate>
        <Switch>
          {appRoutes.map(route => <Route {...route} key={route}/>)}
        </Switch>
      </MainTemplate>
    </Router>
   </BaseTemplate>
  );
}

export default App;