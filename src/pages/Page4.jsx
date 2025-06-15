import React from "react";
import "../pages/Page4.css";

export default function Page4() {
  return (
    <div className="page4-container">
      <div className="submit-section">
        <button className="submit-button">SUBMIT YOUR WORK</button>
      </div>

      <div className="gallery-header">
        <h3>PHOTO GALLERY <span className="view-all">VIEW ALL &gt;</span></h3>
      </div>

      <div className="gallery-strip">
        <img src="/photos/photo3.jpg" alt="img1" />
        <img src="/photos/photo7.jpg" alt="img2" />
        <img src="/photos/photo1.jpg" alt="img3" />
        <img src="/photos/photo4.jpg" alt="img4" />
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
