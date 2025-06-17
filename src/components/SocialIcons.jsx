import React from "react";
import './SocialIcons.css'
export default function SocialIcons() {
  return (
    <div className="social-icons1">
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
  );
}