import React from 'react';
import './Page5.css';

const Page5 = () => {
  return (
    <div className="page5-container" id="about">
      <div className="about-section">
        <h1 className="about-title">ABOUT</h1>
        <div className="about-underline"></div>
        <p className="about-text">
          <em>
            Sangam is the official Students’ Publication Board of the Indian Institute of Technology Jammu.
            It was established to provide a structured platform for students to publish written and visual
            content related to campus life, academics, culture, and current affairs. <br /><br />
          </em>
          <a href="/about" target="_blank" rel="noopener noreferrer">
            <button className='read-more-button'>Read More</button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page5;
