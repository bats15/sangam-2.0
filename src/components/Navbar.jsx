import React, { useState } from "react";
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
  const size = window.innerWidth;
  const [tag, settag] = useState(false)
  function handleclick() {
    settag(prev => !prev)
  }
  return (
    <nav className="navbar">
      {size > 768 ? (
        <>
          <div className="logo"><img src="/assets/logo.png" alt="Logo" /></div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('home')}>HOME</a></li>
            <li><a onClick={() => scrollToSection('about')}>ABOUT</a></li>
            <li><a onClick={() => scrollToSection('cover-stories')}>COVER STORIES</a></li>
            <li><a onClick={() => scrollToSection('magazine-issues')}>MAGAZINE ISSUES</a></li>
            <li><a onClick={() => scrollToSection('reader')}>READER'S DESK</a></li>
            <li><a href="/Team" target="_blank" rel="noopener noreferrer">TEAM</a></li>
            <li><a onClick={() => scrollToSection('contact')}>CONTACT US</a></li>
          </ul>
        </>
      ) : (
        <div className="nav-mobile">
          <div className="logo-mobile">
            <img src="" alt="" />
          </div>
          <div className="sidebar-mobile">
            <div className="sidebar-button">
              <button onClick={handleclick} id="lines--">{tag ? 'X' : '☰'}</button>
            </div>
            <div className={`slideout ${tag ? 'open' : ''}`} id="slideout">
              <ul className="nav-links-mobile">
                <li><a onClick={() => scrollToSection('home')}>HOME</a></li>
                <li><a onClick={() => scrollToSection('about')}>ABOUT</a></li>
                <li><a onClick={() => scrollToSection('cover-stories')}>COVER STORIES</a></li>
                <li><a onClick={() => scrollToSection('magazine-issues')}>MAGAZINE ISSUES</a></li>
                <li><a href="/Team" target="_blank" rel="noopener noreferrer">TEAM</a></li>
                <li><a onClick={() => scrollToSection('contact')}>CONTACT US</a></li>
              </ul>
              <div className="social-links-mobile">
                <a href="https://www.instagram.com/sangam.iitjmu?igsh=dXZ3azVuaXdnb3Ey" target="_blank">
                  <img src="/icons/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/sangam-iit-jammu-a36244354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                  <img src="/icons/linkedin.svg" alt="linkdin" id="invert" />
                </a>
                <a href="mailto:sangam@iitjammu.ac.in">
                  <img src="/icons/mail.svg" alt="Email" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}
