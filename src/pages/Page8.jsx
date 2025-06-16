import React from "react";
import "../pages/Page8.css";

export default function Page8() {
  const team = [
    {
      name: "Kanishka Chholak",
      id: "2023uce0052",
      role: "Chairperson",
    },
    {
      name: "Bhoomi Yadav",
      id: "2023uch0012",
      role: "Senior Advisor",
    },
    {
      name: "Akshay Malwey",
      id: "2023ucs0080",
      role: "Senior Advisor",
    },
  ];

  return (
    <div className="page8-container" id="team">
      <div className="team-header">
        <h1>TEAM</h1>
        <hr className="underline" />
      </div>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="team-image-placeholder"></div>
            <div className="team-info">
              <p>{member.name}</p>
              <p>{member.id}</p>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
