import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './pages/index'
import Login from './pages/login'
import Admin from './pages/admin'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    </Router>
  )
}

export default App