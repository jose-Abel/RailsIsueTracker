import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/homepage/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/homepage/projects">Projects</NavLink>
        </li>          
      </ul>
    </nav>
  )
}

export default Sidebar;