import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Notfound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
)

export default App
