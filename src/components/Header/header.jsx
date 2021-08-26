import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h1>React Users</h1>
        <div className="nav-wrapper">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
