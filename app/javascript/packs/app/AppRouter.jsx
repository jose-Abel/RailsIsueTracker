import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Projects from '../features/projects/Projects';
import Dashboard from '../features/Dashboard';
import ProjectDetail from '../features/projects/ProjectDetail';

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>

          <Route path="/dashboard">
            <Dashboard/>
          </Route>

          <Route exact path="/projects">
            <Projects/>
          </Route>

          <Route path="/projects/:projectId">
            <ProjectDetail/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;