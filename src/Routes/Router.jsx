import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/Home'
import Register from '../pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/login" component={Login} />
        <Route to="/Register" component={Register} />
        <Route to="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
