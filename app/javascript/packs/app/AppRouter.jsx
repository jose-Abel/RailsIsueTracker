import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from './layout/home/HomePage';
import Projects from './features/projects/Projects';
import classes from './App.module.css';
import Dashboard from './layout/dashboard/Dashboard';

const App = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/homepage" />
          </Route>

          <Route path="/homepage">
            <HomePage/>
          </Route>

          <Route path="/homepage/dashboard">
            <Dashboard />
          </Route>

          <Route path="/homepage/projects">
            <Projects />
          </Route>
  
        </Switch>
      </main>
    </div>
  );
}

export default App;