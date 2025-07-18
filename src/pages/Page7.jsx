import React from "react";
import "../pages/Page7.css";

export default function Page7() {
  const issues = [
    { edition: "Edition 1", title: "Jammu", image: "/coverimg/1.png", link: "https://drive.google.com/file/d/1b_YVXwWkmyeGhLHEN1P81n7zh2-elOn9/view?usp=sharing" },
    { edition: "Edition 2", title: "Fest" , image: "/coverimg/2.png", link: "https://drive.google.com/file/d/1bYhzKxfqzSHL8ppzguKq4k6yD9uTagmy/view?usp=sharing" },
    { edition: "Edition 3", title: "Mental Health", image: "/coverimg/3.png", link: "https://drive.google.com/file/d/1bVEx0lV0BD7a0TqAfiDriqYdQYeF4Rsf/view?usp=sharing" },
  ];

  return (
    <div className="page7-container" id="magazine-issues">
      <div className="magazine-header">
        <h1 className="magazine-title">MAGAZINE ISSUES</h1>
        <hr className="magazine-underline" />
      </div>

      <div className="issue-grid">
        {issues.map((issue, index) => (
          <div className="issue-card" key={index}>
            <div className="image-placeholder">
              <a href={issue.link} target="_blank" rel="noopener noreferrer"><img src={issue.image} alt={`Issue ${index + 1}`} className="issue-image" /></a>
            </div>
            <div className="issue-button">
              <span>{issue.edition}</span><br />
              <span>{issue.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
