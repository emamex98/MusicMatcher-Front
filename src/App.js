import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/layout/Login";
import SignUp from "./components/layout/Signup";
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import UserProfile from './components/dashboard/UserProfile';
import Chats from './components/dashboard/Chats';

function App() {
  return (<Router>
    <div className="App">
    <div className="auth-wrapper">
      <div className="auth-inner">
      <Navbar/>
      </div>
      </div>
      <Switch>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
