import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Projects from '../features/projects/Projects';
import Dashboard from '../features/dashboard/Dashboard';
import ProjectDetail from '../features/projects/ProjectDetail';
import Sidebar from './layout/Sidebar';
import classes from './App.module.css';

const App = () => {
  return (
    <div>
      <Sidebar/>
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