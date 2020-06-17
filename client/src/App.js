import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Admin from "./pages/Admin/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routers"; //sin lleva porque es una exportación default
//import AdminHome from "./pages/Admin";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/admin" exact={true} component={AdminHome}></Route> */}
      </Switch>
    </Router>
  );
}

function RoutesWithSubroutes(route) {
  console.log(route);

  return true;
}

export default App;
