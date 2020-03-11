import React                     from "react";
import { useAuth0 }              from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";

import history                   from "./utils/history";
import Profile                   from "./components/Profile";
import PrivateRoute              from "./components/PrivateRoute";
import NavBar                    from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;