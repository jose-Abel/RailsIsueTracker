import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>          
      </ul>
    </nav>
  )
}

export default Sidebar;