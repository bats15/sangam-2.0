import React from "react";
import "../pages/Page8.css";

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
      "id": "2024UCS0083"
    },
    {
      "name": "Sparsh Dubey",
      "role": "",
      "id": "2024ume0264"
    },
    {
      "name": "Prashant Gautam",
      "role": "",
      "id": "2024UMA0219"
    },
    {
      "name": "Devisha Patel",
      "role": "",
      "id": "2024UMT0165"
    },
    {
      "name": "Sayani Neogi",
      "role": "",
      "id": "2024UEE0136"
    },
    {
      "name": "Priyanshi Agarwal",
      "role": "",
      "id": "2024UME0254"
    },
    {
      "name": "Ram Krishan Kunal",
      "role": "",
      "id": "2024UEE0128"
    },
    {
      "name": "Sujeet Rai",
      "role": "",
      "id": "2024UEE0127"
    },
    {
      "name": "Kovid Baid",
      "role": "",
      "id": "2024uma0214"
    },
    {
      "name": "Pariket Aludiya",
      "role": "",
      "id": "2024UME0250"
    },
    {
      "name": "Basit Warsi",
      "role": "",
      "id": "2024UCS0101"
    }
  ]

  return (
    <div className="page8-container" id="team">
      <div className="team-header">
        {/* <h1>TEAM</h1>
        <hr className="underline11" /> */}
      </div>

      {/* <div className="team-grid">
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
      </div> */}
      <div className="junior-team">
        <div className="junior-team-row">
          {juniorTeam.map((member, index)=>(
            <div className="junior-team-member" key={index}>
              <div className="junior-team-image-placeholder">
                <img src={`/team/${member.id}.jpg`} alt="" />
              </div>
              <div className="team-info">
                <p>{member.name}</p>
                <p>{member.id}</p>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
