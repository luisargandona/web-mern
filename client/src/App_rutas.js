import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Sistema de rutas básico</h1>

        <Link to="/">Home</Link>
        <br/>
        <Link to="/contact">Contact</Link>
        <br/>
        <Link to="/users">Users</Link>
        <br/>
        <br/>
        <br/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users" component={Users} />
          <Route component={Error404}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Estamos en el componente Home</h2>;
}

function Contact() {
  return <h2>Estamos en el componente Contact</h2>;
}

function Users() {
  return <h2>Estamos en el componente Users</h2>;
}

function Error404() {
  return <h2>Error 404</h2>;
}
export default App;
