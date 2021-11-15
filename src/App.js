import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from './pages/Home'
import Error404 from './pages/Error404'
import Weekly from './pages/Weekly'
import WeeklyBattle from './pages/WeeklyBattle'
import Popular from './pages/Popular'
import PopularBattle from './pages/PopularBattle'
import Favorites from './pages/Favorites'

class App extends Component {
  render() {
    // 74ff4d5b18f55c304a239fadf716fe2f
    return (
      <BrowserRouter>

        {/* Component qui représente la liste des routes */}
        <Switch>
          {/* Une route au singulier représente un url spécifique */}
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weeklybattle" component={WeeklyBattle} />
          <Route path="/popular" component={Popular} />
          <Route path="/popularbattle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App