import React from 'react';
import { Route } from 'react-router-dom';
import classes from './HomePage.module.css';
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../dashboard/Dashboard';
import Projects from '../../features/projects/Projects';

const HomePage = () => {

  return (
    <div className={classes.homepage}>
      <Sidebar />

      <Route exact path="/homepage/dashboard">
        <Dashboard />
      </Route>

      <Route exact path="/homepage/projects">
        <Projects />
      </Route>      
    </div>
  )
}

export default HomePage;