import React from "react";
import "./SocialIcons.css";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://instagram.com" target="_blank">
        <img src="/icons/instagram.png" alt="Instagram" />
      </a>
      <a href="mailto:someone@example.com">
        <img src="/icons/mail.png" alt="Email" />
      </a>
    </div>
  );
}
