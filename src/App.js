import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Planets from './views/planets';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:page?">
          <Planets />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
