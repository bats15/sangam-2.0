import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><img src="/assets/logo.png" alt="Logo" /></div>
      <ul className="nav-links">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>ARTICLES</li>
        <li>MAGAZINE ISSUES</li>
        <li>TEAM</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  );
}
