import React from "react";
import "../pages/Page7.css";

export default function Page7() {
  const issues = [
    { edition: "Edition 1", title: "Jammu" },
    { edition: "Edition 2", title: "Fest" },
    { edition: "Edition 3", title: "Mental Health" },
    { edition: "Edition 4", title: "Cinema" },
  ];

  return (
    <div className="page7-container">
      <div className="magazine-header">
        <h1>MAGAZINE ISSUES</h1>
        <hr className="underline" />
      </div>

      <div className="issue-grid">
        {issues.map((issue, index) => (
          <div className="issue-card" key={index}>
            <div className="image-placeholder"></div>
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
