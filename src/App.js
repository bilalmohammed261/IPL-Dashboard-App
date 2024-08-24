import './App.css'
import {Route, Switch} from 'react-router-dom'
import Notfound from './components/NotFound'
import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />

    <Route component={Notfound} />
  </Switch>
)

export default App
