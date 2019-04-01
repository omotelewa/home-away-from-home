import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Logo</a>
      <ul className="right hide-on-med-and-down">
        <li><a className="waves-effect waves-light btn">Button</a></li>
        <li><a className="waves-effect waves-light btn">Button <i className="material-icons right">cloud</i></a></li>
        <li><a className="waves-effect waves-light btn-large">Large Button</a></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;