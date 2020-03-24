import React                     from "react";
import { useAuth0 }              from "./utils/auth0/react-auth0-spa";
import { Link, Router, Route, Switch } from "react-router-dom";

import history                   from "./utils/history";
import Profile                   from "./components/Profile";
import PrivateRoute              from "./components/PrivateRoute";
import NavBar                    from "./components/NavBar";

function App() {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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