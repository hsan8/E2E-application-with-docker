import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import employeesList from "./components/employeesList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/employees" className="navbar-brand">
          Employee Portal
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/employees"} className="nav-link">
              List all
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/employees"]} component={employeesList} />
          <Route exact path="/add" component={AddEmployee} />
          <Route path="/employees/:id" component={Employee} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
