import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Link } from 'react-router-dom'
import { justAnAlert } from './utils/network'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from './pages/Home'
import Error404 from './pages/Error404'
import Weekly from './pages/Weekly'
import WeeklyBattle from './pages/WeeklyBattle'
import Popular from './pages/Popular'
import PopularBattle from './pages/PopularBattle'
import Favorites from './pages/Favorites'


class App extends Component {
  render() {
    justAnAlert()
    return (
      <BrowserRouter>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/weekly">Weekly</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/weeklybattle">Weekly Battle</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/popular">Popular</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/popularbattle">Popular Battle</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">Favorites</Link>
          </li>
        </ul>

        {/* Component qui représente la liste des routes */}
        <Switch>
          {/* Une route au singulier représente un url spécifique */}
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weeklybattle" component={WeeklyBattle} />
          <Route exact path="/popular" component={Popular} />
          <Route path="/popularbattle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App