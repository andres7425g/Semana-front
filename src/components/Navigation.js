import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>

<div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  </div>

    </div>
  );
};

export default Navigation;