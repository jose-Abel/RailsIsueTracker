import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <ul>
        <li className={classes.navLi}>
          <NavLink className={classes.navATag} to="/homepage/dashboard">Dashboard</NavLink>
        </li>

        <li className={classes.navLi}>
          <NavLink className={classes.navATag} to="/homepage/projects">Projects</NavLink>
        </li>          
      </ul>
    </nav>
  )
}

export default Sidebar;