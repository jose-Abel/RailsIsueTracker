import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
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

export default Navbar;