
import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, Switch } from "react-router-dom";
import history from "../history";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import Feed from "./Feed.jsx";

const Nav = (props) => {
  return (
  <Router history={history}>
      <nav>
        <div className="container">
          <nav className="nav-bar">
            <ul className="">
              <li>
                <Link to="/Feed" activeClassName="active">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/profile" activeClassName="active">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </nav>
  </Router>
  );
};

export default Nav;
