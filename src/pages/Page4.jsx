import React, { useState } from "react";
import "../pages/Page4.css";

export default function Page4() {
  const images = [];
  for (let i = 2; i <= 16; i++) {
    images.push(`/photos/photo${i}.jpg`);
  }

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  const getImage = (offset) => {
    return images[(index + offset + images.length) % images.length];
  };

  return (
    <div className="page4-container" id="contact">

      <div className="gallery-header">
        <h3>PHOTO GALLERY</h3>
      </div>

      <div className="slideshow-controls">
        <button onClick={prevSlide} className="nav-button">←</button>

        <div className="gallery-strip">
          <img src={getImage(-1)} alt="left" className="gallery-side" />
          <img src={getImage(0)} alt="center" className="gallery-center" />
          <img src={getImage(1)} alt="right" className="gallery-side" />
        </div>

        <button onClick={nextSlide} className="nav-button">→</button>
      </div>

      <div className="footer-section">
        <div className="qr-section">
          <p>scan this QR code to raise <br />help for a social cause!</p>
          <div className="qr-box" />
        </div>

        <div className="footer-center">
          <h2>Think. Connect.</h2>
        </div>

        <div className="address-section">
          <p>
            Indian Institute of Technology Jammu <br />
            Jagti, NH-44 , PO Nagrota <br />
            Jammu - 181 221 J&amp;K, India.
          </p>
          <p className="contact-label">Welcome Contacts</p>
          <div className="contact-bar" />
        </div>
      </div>
    </div>
  );
}
