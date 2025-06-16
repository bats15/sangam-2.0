import React from "react";
import "../pages/Page2.css";

export default function Page2() {
  return (
    <div className="page2-container" id="Founder-note">
      <section className="latest-editions">
        <div className="edition-cards">
          <div className="card">
            <img src="/placeholder.jpg" alt="Edition" />
            <div className="badge">🎓</div>
          </div>
          <div className="card">
            <img src="/placeholder.jpg" alt="Edition" />
            <div className="badge">🎓</div>
          </div>
          <div className="card">
            <img src="/placeholder.jpg" alt="Edition" />
            <div className="badge">🎓</div>
          </div>
        </div>
        <div className="edition-title">
          <hr />
          <h2>LATEST <br /> EDITIONS</h2>
        </div>
      </section>

      <section className="founder-note">
        <div className="founder-title">
          <h2>FOUNDER’S <br /> <span>NOTE</span></h2>
          <p><em>KANISHKA CHHOLAK</em></p>
        </div>
        <div className="founder-text">
          <p>
            <em>
              Sangam began with a simple idea — that students need a space beyond academics to express, reflect, and create. We wanted a platform where thoughts, emotions, opinions, and imagination could come together — a true confluence of voices from across our campus. Over time, Sangam has grown from a quiet vision into a vibrant publication board, capturing the essence of IIT Jammu through stories, poems, articles, and art. Every edition reflects the spirit of our student community — honest, diverse, and ever-evolving. So, to every reader who has found their way here: Thank you for joining us.  We invite you to explore, to engage, and, if you feel inspired — to contribute. Because here at Sangam, your voice matters. Let your thoughts flow. Let them meet. Let them Sangam.
            </em>
          </p>
        </div>
      </section>
    </div>
  );
}
