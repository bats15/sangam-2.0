import React from "react";
import Navbar from "../components/Navbar";
import "./Page1.css";

export default function Page1() {
  return (
    <div className="container" id="home">
      <Navbar />
      <div className="overlay" />

      <main className="content">
        <p className="welcome">
          WELCOME TO OUR <span className="highlight">DIGITAL WORLD</span>
        </p>
        <h1 className="title">SANGAM</h1>
        <h2 className="subtitle">THE STUDENTS’ PUBLICATION BOARD</h2>
        <p className="desc">
          The official voice of IIT Jammu — where ideas converge, stories inspire, and student creativity takes center stage.
        </p>
      </main>
    </div>
  );
}
