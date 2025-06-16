import React from "react";
import "../pages/Page8.css";
import { useState } from "react";

export default function Page8() {
  const team = [
    {
      "name": "Kanishka Chholak",
      "role": "Senior Advisor",
      "id": "2023uce0052"
    },
    {
      "name": "Akshay Malwey",
      "role": "Senior Advisor",
      "id": "2023ucs0080"
    },
    {
      "name": "Bhoomi Yadav",
      "role": "Senior Advisor",
      "id": "2023uch0012"
    },
  ];
  const juniorTeam = [
    {
      "name": "Arshpreet Kaur",
      "role": "",
      "id": "2024ucs0083"
    },
    {
      "name": "Sparsh Dubey",
      "role": "",
      "id": "2024ume0264"
    },
    {
      "name": "Prashant Gautam",
      "role": "",
      "id": "2024uma0219"
    },
    {
      "name": "Devisha Patel",
      "role": "",
      "id": "2024umt0165"
    },
    {
      "name": "Sayani Neogi",
      "role": "",
      "id": "2024uee0136"
    },
    {
      "name": "Priyanshi Agarwal",
      "role": "",
      "id": "2024ume0254"
    },
    {
      "name": "Ram Krishan Kunal",
      "role": "",
      "id": "2024uee0128"
    },
    {
      "name": "Sujeet Rai",
      "role": "",
      "id": "2024uee0127"
    },
    {
      "name": "Kovid Baid",
      "role": "",
      "id": "2024uma0214"
    },
    {
      "name": "Pariket Aludiya",
      "role": "",
      "id": "2024ume0250"
    },
    {
      "name": "Basit Warsi",
      "role": "",
      "id": "2024ucs0101"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(2); // center starts at index 2

  const goLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  const goRight = () => {
    if (currentIndex < juniorTeam.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const getVisibleImages = () => {
  return [
    juniorTeam[currentIndex - 1],
    juniorTeam[currentIndex],
    juniorTeam[currentIndex + 1],
  ].filter(member => member !== undefined);
};

  return (
    <div className="page8-container" id="team">
      <div className="team-header">
        <h1>TEAM</h1>
        <hr className="underline" />
      </div>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="team-image-placeholder">
              <img src=""/>
            </div>
            <div className="team-info">
              <p>{member.name}</p>
              <p>{member.id}</p>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="junior-team">
        <button onClick={goLeft} disabled={currentIndex === 0}>&lt;</button>
        <div className="junior-team-row">
          {getVisibleImages().map((team, index) => (
            <div className="team-member" key={index}>
              <div className="team-image-placeholder">
                <img src="" alt="" />
              </div>
              <div className="team-info">
                <p>{team.name}</p>
                <p>{team.id}</p>
                <p>{team.role}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={goRight} disabled={currentIndex === juniorTeam.length - 1}>&gt;</button>
      </div>
    </div>
  );
}
