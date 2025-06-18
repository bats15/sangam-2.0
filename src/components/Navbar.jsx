import React from "react";
import "./Navbar.css";
import Page8 from '../pages/Page8'
export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src="/assets/logo.png" alt="Logo" /></div>
      <ul className="nav-links">
        <li><a onClick={() => scrollToSection('home')}>HOME</a></li>
        <li><a onClick={() => scrollToSection('about')}>ABOUT</a></li>
        <li><a onClick={() => scrollToSection('cover-stories')}>COVER STORIES</a></li>
        <li><a onClick={() => scrollToSection('magazine-issues')}>MAGAZINE ISSUES</a></li>
        <li><a href="/Team" target="_blank" rel="noopener noreferrer">TEAM</a></li>
        <li><a onClick={() => scrollToSection('contact')}>CONTACT US</a></li>
      </ul>
    </nav>
  );
}
