import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Availability from "./Availability";
import Species from "./Species";
import About from "./About";



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Pokedex Book</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/availability">Availability</NavLink></li>
            <li><NavLink to="/species">Species</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/availability" component={Availability}/>
            <Route exact path="/species" component={Species}/>
            <Route exact path="/about" component={About}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;